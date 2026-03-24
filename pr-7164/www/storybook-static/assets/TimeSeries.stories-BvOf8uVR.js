import{e}from"./iframe-Cghk5Dv5.js";import{X as s}from"./XAxis-C28GaQOE.js";import{R as y}from"./arrayEqualityCheck-Blp4qByB.js";import{C as g}from"./ComposedChart-BzndwtyO.js";import{L as x}from"./Line-CyV2MMls.js";import{R as S}from"./RechartsHookInspector-Dhw1ahnh.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-DwfmephR.js";import{T as V}from"./Tooltip-DIg0HLtd.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-NFB-A6xZ.js";import"./Layer-BZayzYJ5.js";import"./resolveDefaultProps-Ca9Q42EU.js";import"./Text-CTdXj2Wj.js";import"./DOMUtils-B6BLeQuC.js";import"./Label-DMYBuQg7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C0MHsSee.js";import"./zIndexSlice-Cr5Wd2hn.js";import"./immer-C9d2WDC3.js";import"./types-BAdQFhn_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B7PVLtE-.js";import"./hooks-DvHGCK_P.js";import"./axisSelectors-BmN1bSZG.js";import"./RechartsWrapper-BCDf7E4k.js";import"./index--WQv2JEI.js";import"./CartesianChart-Dl7eKZR1.js";import"./chartDataContext-FHRsRLf6.js";import"./CategoricalChart-BX2q-J4I.js";import"./ReactUtils-DJKFAAVq.js";import"./ActivePoints-D_0gNFPA.js";import"./Dot-DDhuD7gd.js";import"./RegisterGraphicalItemId-DxmHa7yf.js";import"./ErrorBarContext-B48_fgxO.js";import"./GraphicalItemClipPath-J2zVG9I1.js";import"./SetGraphicalItem-DKkCveHJ.js";import"./useAnimationId-B_fUzLa-.js";import"./getRadiusAndStrokeWidthFromDot-CegfqfN2.js";import"./ActiveShapeUtils-CgedLmsf.js";import"./isPlainObject-GvFH0_0U.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-SpFzk5.js";import"./Trapezoid-D5vWYT03.js";import"./Sector-WHMRpyIm.js";import"./Symbols-i2nCmAEN.js";import"./symbol-BX-g_aqV.js";import"./step-CJt2p9N6.js";import"./Curve-tyrMpXlR.js";import"./index-DQ-QIWuT.js";import"./ChartSizeDimensions-Dm4LSJOm.js";import"./OffsetShower-CKEh5r6l.js";import"./PlotAreaShower-m5B18Oa-.js";import"./useElementOffset-DGki2voW.js";import"./uniqBy-BP9r3ZBr.js";import"./iteratee-Cll8zDsJ.js";import"./Cross-D4p6iHby.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
