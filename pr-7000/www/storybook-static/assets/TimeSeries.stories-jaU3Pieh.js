import{e}from"./iframe-CFT77Gxv.js";import{X as s}from"./XAxis-iSjPfIVk.js";import{R as y}from"./arrayEqualityCheck-D0woyLdN.js";import{C as g}from"./ComposedChart-_mVvbmGs.js";import{L as x}from"./Line-CEYHVSem.js";import{R as S}from"./RechartsHookInspector-BcoRzUX4.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-DOMws57m.js";import{T as O}from"./Tooltip-DHPWMRqW.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BfLi8adI.js";import"./CartesianAxis-BbU1esix.js";import"./Layer-MeOR0S7X.js";import"./Text-Bq7B7F5n.js";import"./DOMUtils-DtvoLBHD.js";import"./Label-BG9DvreX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-uKRagXxd.js";import"./zIndexSlice-Czz78II2.js";import"./types-CpsEOU-X.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-yAz6J_Nf.js";import"./RechartsWrapper-C06tio3K.js";import"./CartesianChart-8phVSf5K.js";import"./chartDataContext-yQ3flajw.js";import"./CategoricalChart-BnvwGt9I.js";import"./ReactUtils-BfhnJY8u.js";import"./ActivePoints-CpG8Wxyr.js";import"./Dot-DdlNMwed.js";import"./RegisterGraphicalItemId-C7MUsBLo.js";import"./ErrorBarContext-TG4W3Nt0.js";import"./GraphicalItemClipPath-hpTG4Orq.js";import"./SetGraphicalItem-Bnzd430s.js";import"./useAnimationId-DgcLlBvC.js";import"./getRadiusAndStrokeWidthFromDot-dEU-vJCv.js";import"./ActiveShapeUtils-CyY8Lu1y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxDot7kp.js";import"./Trapezoid-DpyS5tZu.js";import"./Sector-DYvzTYWt.js";import"./Symbols-Cng0_jSU.js";import"./Curve-D6lAkyMf.js";import"./index-9FfrM9hg.js";import"./ChartSizeDimensions-DP7onZPk.js";import"./OffsetShower-BQl_FUQS.js";import"./PlotAreaShower-kI7aZSrk.js";import"./useElementOffset-Bnm15LDE.js";import"./iteratee-BUNzxPV7.js";import"./Cross-CH72MCi9.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
