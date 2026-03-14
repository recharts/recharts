import{e}from"./iframe-B0wKxNpK.js";import{X as s}from"./XAxis-y_MJiFx9.js";import{R as y}from"./arrayEqualityCheck-5nuhtSeT.js";import{C as g}from"./ComposedChart-CLdtbTIL.js";import{L as x}from"./Line-DOcSrsPt.js";import{R as S}from"./RechartsHookInspector-DYn9zJB9.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-CQFM5VB3.js";import{T as V}from"./Tooltip-DJaVq7DJ.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BqdAX1QZ.js";import"./Layer-DSIwel9q.js";import"./resolveDefaultProps-CIdIqjjC.js";import"./Text-DlBKXZA-.js";import"./DOMUtils-CSAF-8sx.js";import"./Label-BdkcMQDU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-70VD5Z7C.js";import"./zIndexSlice-BcKpuoZl.js";import"./immer-DUb1bWtb.js";import"./types-CYNiifb0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-dfIm6fl5.js";import"./hooks-oSTNajEI.js";import"./axisSelectors-C1uueI6X.js";import"./RechartsWrapper-CrtUXLbx.js";import"./index-Cnz4_p8Q.js";import"./CartesianChart-CLpt04B_.js";import"./chartDataContext-CfWR9eN6.js";import"./CategoricalChart-DBWdCLL2.js";import"./ReactUtils-sKOkm0_2.js";import"./ActivePoints-BSvrQoGF.js";import"./Dot-DXpreqzJ.js";import"./RegisterGraphicalItemId-CDkf5IwF.js";import"./ErrorBarContext-B1oYf-9A.js";import"./GraphicalItemClipPath-BCjuGXXY.js";import"./SetGraphicalItem-Be0sJCS3.js";import"./useAnimationId-BdZ_5XMP.js";import"./getRadiusAndStrokeWidthFromDot-C3Mll_Mr.js";import"./ActiveShapeUtils-D6gjATQs.js";import"./isPlainObject-CDFz0xXj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BLIXCh-E.js";import"./Trapezoid-DtGJqYre.js";import"./Sector-CjeW4NDg.js";import"./Symbols-D24cFx-Z.js";import"./symbol-CrLzL-Wg.js";import"./step-CkYKWKxI.js";import"./Curve-DiJIjJff.js";import"./index-CyRoQl_d.js";import"./ChartSizeDimensions-Bu6AufwQ.js";import"./OffsetShower-Crn6XKfz.js";import"./PlotAreaShower-YsEXXYRG.js";import"./useElementOffset-B49r8Ahh.js";import"./uniqBy-Dhf1Ehe8.js";import"./iteratee-C1h-EimB.js";import"./Cross--xo8aNh2.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const zt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
