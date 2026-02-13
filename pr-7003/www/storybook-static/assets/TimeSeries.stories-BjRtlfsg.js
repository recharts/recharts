import{e}from"./iframe-Cy8G_j66.js";import{X as s}from"./XAxis-sHLPbu1e.js";import{R as y}from"./arrayEqualityCheck-dp8dfL7u.js";import{C as g}from"./ComposedChart-BxEcgcZi.js";import{L as x}from"./Line-qEl9DN3q.js";import{R as S}from"./RechartsHookInspector-lSqxoQlZ.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-Dnswsufb.js";import{T as O}from"./Tooltip-DzoeT4p7.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DHnXBr-T.js";import"./CartesianAxis-mJhpe0_9.js";import"./Layer-D4d1YeMH.js";import"./Text-C8Cfe64C.js";import"./DOMUtils-CSAZ0z5r.js";import"./Label-r4OEA6Zh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DYA27QSR.js";import"./zIndexSlice-BDvzw6V8.js";import"./types-BSABi_Hc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-Dh2IuVAR.js";import"./RechartsWrapper-BtX23pZ_.js";import"./CartesianChart-BzoasTlc.js";import"./chartDataContext-Dyi2rgks.js";import"./CategoricalChart-0rxnxhIB.js";import"./ReactUtils-CPeEyyol.js";import"./ActivePoints-Bd_88S8O.js";import"./Dot-D2TzI8Gx.js";import"./RegisterGraphicalItemId-Do-QRU28.js";import"./ErrorBarContext-D6VQHKa5.js";import"./GraphicalItemClipPath-B6TO2Oyf.js";import"./SetGraphicalItem-sOhar6CJ.js";import"./useAnimationId-YkjhaILr.js";import"./getRadiusAndStrokeWidthFromDot-DZH1LMkE.js";import"./ActiveShapeUtils-BtpIhy8s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DF923tDp.js";import"./Trapezoid-CLz1a_Xw.js";import"./Sector-Dv6krD40.js";import"./Symbols-Dz-91Pdw.js";import"./Curve-B4b9EAiq.js";import"./index-Blxurm1a.js";import"./ChartSizeDimensions-CzRSNWvg.js";import"./OffsetShower-C1xZ_Sdf.js";import"./PlotAreaShower-DQwE5Dcy.js";import"./useElementOffset-BSLWjzfu.js";import"./iteratee-DDkVWpiV.js";import"./Cross-eMFSUkxv.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
