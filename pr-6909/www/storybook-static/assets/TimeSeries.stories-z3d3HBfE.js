import{e}from"./iframe-DvdxI6dC.js";import{X as s}from"./XAxis-DJowtDGC.js";import{R as y}from"./arrayEqualityCheck-DXUAObl0.js";import{C as g}from"./ComposedChart-YdiELtKV.js";import{L as x}from"./Line-BdbR2_0r.js";import{R as S}from"./RechartsHookInspector-B_PrFdYH.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-4CKM8Xol.js";import{T as O}from"./Tooltip-CYub55gM.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DH7aS_Cz.js";import"./CartesianAxis-CptW6PK3.js";import"./Layer-QQplstvs.js";import"./Text-DcBx6qw-.js";import"./DOMUtils-XQErKiOi.js";import"./Label-zPyZ6EuZ.js";import"./PolarUtils-BY4iZmOi.js";import"./ZIndexLayer-Cnm_-Zvz.js";import"./zIndexSlice-JVJMXPV9.js";import"./types-8AXfgSIv.js";import"./hooks-DrOmiLx6.js";import"./CategoricalChart-Cx_ZKXH4.js";import"./RechartsWrapper-BLfZDcOn.js";import"./CartesianChart-CVXjEBNC.js";import"./chartDataContext-D9T_3Pfc.js";import"./ReactUtils-DqWjpCBi.js";import"./ActivePoints-BSveXf-N.js";import"./Dot-DSDPr-6Z.js";import"./RegisterGraphicalItemId-C1Pco6VZ.js";import"./ErrorBarContext-CaA_0bex.js";import"./GraphicalItemClipPath-DNpqs3F2.js";import"./SetGraphicalItem-B3AbHWGd.js";import"./useAnimationId-Dy3gyKDZ.js";import"./getRadiusAndStrokeWidthFromDot-BCM2WAWf.js";import"./ActiveShapeUtils-CgduogxH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CeQtanoQ.js";import"./Trapezoid-BNKT4KGX.js";import"./Sector-DWkTEbbM.js";import"./Symbols-BZsKNNtj.js";import"./Curve-BRTvsj-M.js";import"./index-CwHutVPN.js";import"./ChartSizeDimensions-Dk78WGJs.js";import"./OffsetShower-BP3lO1NK.js";import"./PlotAreaShower-DiTB-vHo.js";import"./useElementOffset-B-aJyaAb.js";import"./iteratee-CoefYKPX.js";import"./Cross-BGXGqWaa.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Ht as __namedExportsOrder,Lt as default};
