import{R as e}from"./iframe-BaK-xze-.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CTevCFW7.js";import{R as h}from"./zIndexSlice-DrFw0t7C.js";import{C as g}from"./ComposedChart-DhdbIgqC.js";import{L as x}from"./Line-Bw8HAxQR.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-_8yp9yQE.js";import{T as V}from"./Tooltip-BBj8J94A.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CSk3G5Bd.js";import"./Layer-C6rljEkC.js";import"./resolveDefaultProps-Cil0S8B-.js";import"./Text-CdbyXNxn.js";import"./pageBackground-CV09xolb.js";import"./isWellBehavedNumber-Bo5UiCAJ.js";import"./useId-s-O1vSWD.js";import"./useBackwardsCompatibleTheme-B3pLDlIF.js";import"./Label-cKDNSGIr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Byqn6KnA.js";import"./index-CnYYSSY1.js";import"./index-CtznlYAS.js";import"./types-DSy0pRW3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CNPiGgUW.js";import"./throttle-CYt85Ar6.js";import"./index-Dlm-5Ij4.js";import"./index-Dw-ed78r.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-CnfYSHLW.js";import"./RechartsWrapper-DZM6L-T3.js";import"./index-B4hxfgtn.js";import"./CartesianChart-CGaTNHvY.js";import"./chartDataContext-DqcmhhuQ.js";import"./CategoricalChart-MBo-iukw.js";import"./Curve-sUBaLFrc.js";import"./step-BZZY1s9U.js";import"./path-DyVhHtw_.js";import"./activeStyles-CZlzjGsD.js";import"./useAnimationId-B-391LIn.js";import"./dataEntryStyles-IDu762UD.js";import"./ActivePoints-Bf2N-qWJ.js";import"./Dot-DhzFrZOP.js";import"./ErrorBarContext-DndDD6DE.js";import"./GraphicalItemClipPath-BvdkjIlE.js";import"./SetGraphicalItem-BAL-rDyp.js";import"./getRadiusAndStrokeWidthFromDot-SwZ9tKTP.js";import"./ActiveShapeUtils-DuzIRyyx.js";import"./useEffectiveDataKey-lq0ydW3i.js";import"./useElementOffset-DuSny-9b.js";import"./uniqBy-FpCdKt82.js";import"./iteratee-COMggJ3D.js";import"./Cross-CqZ9nDQr.js";import"./Rectangle-2t7WTJbT.js";import"./util-Dxo8gN5i.js";import"./Sector-TKfoXJRP.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
