import{e}from"./iframe-3ssOB91Q.js";import{X as s}from"./XAxis-B0PHajli.js";import{R as y}from"./arrayEqualityCheck-RWElLsK2.js";import{C as g}from"./ComposedChart-4-taPps0.js";import{L as x}from"./Line-C4lbmCvW.js";import{R as S}from"./RechartsHookInspector-DHP-9GZN.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-DTH02zf7.js";import{T as O}from"./Tooltip-CPd0XiLQ.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ctxcgNcU.js";import"./CartesianAxis-B8B5j-ea.js";import"./Layer-W17HINYn.js";import"./Text-BvProlO0.js";import"./DOMUtils-DJ-ugNhO.js";import"./Label-DzudoiWU.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-CTlKz5-T.js";import"./zIndexSlice-ho1ylgk9.js";import"./types-CfIL69ww.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-6a0TNfIB.js";import"./CategoricalChart-CW0qn3M9.js";import"./RechartsWrapper-8idYzD5u.js";import"./CartesianChart-D-chxrPJ.js";import"./chartDataContext-CBnI5hri.js";import"./ReactUtils-DVrxVJVb.js";import"./ActivePoints-CGehM9Vx.js";import"./Dot-BXBhG_dq.js";import"./RegisterGraphicalItemId-K0GLMkuF.js";import"./ErrorBarContext-Btf7Lyk8.js";import"./GraphicalItemClipPath-BNmYXfJz.js";import"./SetGraphicalItem-D9Cn0Thc.js";import"./useAnimationId-C6CpCegT.js";import"./getRadiusAndStrokeWidthFromDot-NOrRJQ9f.js";import"./ActiveShapeUtils-D4XQIZp-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BrCnLm7V.js";import"./Trapezoid-bVA-uN3w.js";import"./Sector-2W0uOEF9.js";import"./Symbols-CXbAeeaq.js";import"./Curve-D5W7Bwp2.js";import"./index-Cewrc6A2.js";import"./ChartSizeDimensions-BSxBFCsp.js";import"./OffsetShower-BDSx3j6G.js";import"./PlotAreaShower-DLNjbvna.js";import"./useElementOffset-c5AEGGC8.js";import"./iteratee-2ynVNmH8.js";import"./Cross-VUoSz3Oz.js";const Ht={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const It=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,It as __namedExportsOrder,Ht as default};
