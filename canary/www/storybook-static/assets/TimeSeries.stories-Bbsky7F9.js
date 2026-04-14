import{e}from"./iframe-B26tvh8M.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DIWBB6UA.js";import{R as y}from"./arrayEqualityCheck-MuT8Gq0B.js";import{C as g}from"./ComposedChart-DX9vJdu2.js";import{L as x}from"./Line-CTwc6FHC.js";import{R as S}from"./RechartsHookInspector-hyCg-8qC.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-D8gDHM7P.js";import{T as V}from"./Tooltip-7-nWWMjo.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-wEW14JHd.js";import"./Layer-BLXteb37.js";import"./resolveDefaultProps-DWRHZiFf.js";import"./Text-B7apQSTa.js";import"./DOMUtils-Cbj4CypK.js";import"./Label-CKyHcssN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-2hV_wyzX.js";import"./zIndexSlice-9WIqVBWy.js";import"./immer-CXuxt10J.js";import"./types-gN1P51X3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BdibsHeH.js";import"./hooks-CFGRd7FZ.js";import"./axisSelectors-znnp0ZTC.js";import"./RechartsWrapper-DCeLN1YR.js";import"./index-Bz4UcQS6.js";import"./CartesianChart-Cyzcm2Bf.js";import"./chartDataContext-DgpnTfq-.js";import"./CategoricalChart-ClHT_DQk.js";import"./ReactUtils-EalmbCaR.js";import"./ActivePoints-DDMO3vxb.js";import"./Dot-DJ6U_l3e.js";import"./RegisterGraphicalItemId-z3-LYLAM.js";import"./ErrorBarContext-BV9_6zF2.js";import"./GraphicalItemClipPath-tnHq66M5.js";import"./SetGraphicalItem-D6N-Tuye.js";import"./useAnimationId-C40xd6Et.js";import"./getRadiusAndStrokeWidthFromDot-CX1KMj8W.js";import"./ActiveShapeUtils-C5QwOCv6.js";import"./isPlainObject-DAsoG4ko.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7IYda03.js";import"./Trapezoid-Dj9VILyv.js";import"./Sector-s0RSAPuc.js";import"./Symbols-B7tb4BlZ.js";import"./symbol-M8-_4T55.js";import"./step-DSlKLIZT.js";import"./Curve-CeBurhsE.js";import"./index-qKcyhpYV.js";import"./ChartSizeDimensions-D4w-gUjQ.js";import"./OffsetShower-m7V4Yrzs.js";import"./PlotAreaShower-CWNEjbya.js";import"./useElementOffset-DFWZQBhd.js";import"./uniqBy-Bl-3PVel.js";import"./iteratee-BAF-yXNd.js";import"./Cross-CThJ5kyP.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
