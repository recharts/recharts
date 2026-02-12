import{e}from"./iframe-BHl6feHg.js";import{X as s}from"./XAxis-Cyf7QVEF.js";import{R as y}from"./arrayEqualityCheck-JXPmVnXy.js";import{C as g}from"./ComposedChart-k9Vt-A54.js";import{L as x}from"./Line-D8BZJlIf.js";import{R as S}from"./RechartsHookInspector-CQ8dXbzy.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-DkCd3lVb.js";import{T as O}from"./Tooltip-BxbcYDwN.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cbmc1eDK.js";import"./CartesianAxis-h298ab2p.js";import"./Layer-lCm_g64d.js";import"./Text-D9u3Lv_0.js";import"./DOMUtils-Cw8uC_z6.js";import"./Label-K4IXz_WW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BG8-MmnW.js";import"./zIndexSlice-BJqVcMRI.js";import"./types-D0Ktdl0_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-Dg4O0IDH.js";import"./RechartsWrapper-DNWAu01W.js";import"./CartesianChart-a-Nu4Djb.js";import"./chartDataContext-U6yYzpZX.js";import"./CategoricalChart-DPTMtwYi.js";import"./ReactUtils-CAG2pm7w.js";import"./ActivePoints-lE0M4Cdi.js";import"./Dot-LpYSBJRo.js";import"./RegisterGraphicalItemId-C0ySl-rG.js";import"./ErrorBarContext-B_05VW9R.js";import"./GraphicalItemClipPath-pdN9VU--.js";import"./SetGraphicalItem-Cw07hcJH.js";import"./useAnimationId-BLeXX0yF.js";import"./getRadiusAndStrokeWidthFromDot-R49NH_D9.js";import"./ActiveShapeUtils-B7nFKqHq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DXzfAzil.js";import"./Trapezoid-Df-d7Ics.js";import"./Sector-C4gW7qc9.js";import"./Symbols-Cg9YUet5.js";import"./Curve-BK3JDrZL.js";import"./index-fMMWXo17.js";import"./ChartSizeDimensions-HMEMc6fo.js";import"./OffsetShower-BfTyamfA.js";import"./PlotAreaShower-DtEQ72Vu.js";import"./useElementOffset-CfN76kX4.js";import"./iteratee-Dl6PoBqX.js";import"./Cross-BU3QJGXP.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Lt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Lt as __namedExportsOrder,It as default};
