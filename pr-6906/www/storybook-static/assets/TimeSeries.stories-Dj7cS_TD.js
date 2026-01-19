import{e}from"./iframe-DwwP6BDm.js";import{X as s}from"./XAxis-CWc7NM0U.js";import{R as y}from"./arrayEqualityCheck-CXp0SSuS.js";import{C as g}from"./ComposedChart-DKKiCSIk.js";import{L as x}from"./Line-CEmF7sWe.js";import{R as S}from"./RechartsHookInspector-CJI_KtjH.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-B_EC2kA9.js";import{T as O}from"./Tooltip-Bmwu7ZEj.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-fclRL42w.js";import"./CartesianAxis-eabYiytD.js";import"./Layer-CFoQxLn1.js";import"./Text-BQatnNw9.js";import"./DOMUtils-B0inai4d.js";import"./Label-DDS3-7t-.js";import"./PolarUtils-Dg8SPN1d.js";import"./ZIndexLayer-BDklLudV.js";import"./zIndexSlice-B2wHCWq0.js";import"./types-B_qGOwmF.js";import"./hooks-COs4f3qd.js";import"./CategoricalChart-LzovMGTR.js";import"./RechartsWrapper-DfwiyTzK.js";import"./CartesianChart-CSvI-_HL.js";import"./chartDataContext-GZk7dH94.js";import"./ReactUtils-DUdaZBrS.js";import"./ActivePoints-C7W41Iaj.js";import"./Dot-Ce0NiHJU.js";import"./RegisterGraphicalItemId-DERA-43u.js";import"./ErrorBarContext-CdRKq8JD.js";import"./GraphicalItemClipPath-CGcYTlQM.js";import"./SetGraphicalItem-BEgWdOjU.js";import"./useAnimationId-DSGl_EXu.js";import"./getRadiusAndStrokeWidthFromDot-y51lXwYL.js";import"./ActiveShapeUtils-TYQt8YFp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIC-oKaI.js";import"./Trapezoid-D_UTfuwy.js";import"./Sector-CBezTXxj.js";import"./Symbols-C6tHIL3l.js";import"./Curve-CYEqd5kN.js";import"./index-BPFUjSxJ.js";import"./ChartSizeDimensions-Bw79VUZb.js";import"./OffsetShower-BCg2GNSc.js";import"./PlotAreaShower-DXMXrPtG.js";import"./useElementOffset-DWLOui-S.js";import"./iteratee-phGUhboG.js";import"./Cross-r6fTF-i4.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
