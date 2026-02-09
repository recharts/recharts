import{e}from"./iframe-_ezCe_To.js";import{X as s}from"./XAxis-CcLZPlVE.js";import{R as y}from"./arrayEqualityCheck-OWAMtNJc.js";import{C as g}from"./ComposedChart-BZQ3F3Nq.js";import{L as x}from"./Line-tdadl7hT.js";import{R as S}from"./RechartsHookInspector-D5tzqIDa.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-LsrbDDJC.js";import{T as O}from"./Tooltip-6tB19Q6f.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-R_saYEpi.js";import"./CartesianAxis-DGvPXtLW.js";import"./Layer-BtA8wuUB.js";import"./Text-CYvn3qP_.js";import"./DOMUtils-CBHTypWU.js";import"./Label-CHFqoGJt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CWThG05g.js";import"./zIndexSlice-Dca2j4f-.js";import"./types-DgqTh4_l.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DGCPXX4G.js";import"./RechartsWrapper-B3l68k8X.js";import"./CartesianChart-C47j_-ZF.js";import"./chartDataContext-Bh5VlY_Q.js";import"./CategoricalChart-BLLc755m.js";import"./ReactUtils-B0BDd-2i.js";import"./ActivePoints-CJI24LGC.js";import"./Dot-C4tiY8Du.js";import"./RegisterGraphicalItemId-C1YzkRSv.js";import"./ErrorBarContext-DrqmUEJ9.js";import"./GraphicalItemClipPath-BQEIoeEz.js";import"./SetGraphicalItem-DNE92K4u.js";import"./useAnimationId-BzKwp2Yk.js";import"./getRadiusAndStrokeWidthFromDot-D-FWk1PK.js";import"./ActiveShapeUtils-C67ovaxo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-citx9Y_h.js";import"./Trapezoid-CX1vw1n4.js";import"./Sector-Cl8ZFmwF.js";import"./Symbols-DtsjZSQh.js";import"./Curve-C2x4bgof.js";import"./index-DsSUOPyu.js";import"./ChartSizeDimensions-BekARe9N.js";import"./OffsetShower-DpjGgrQ9.js";import"./PlotAreaShower-OcEMvBwg.js";import"./useElementOffset-4FfSo6Pq.js";import"./iteratee-TzTVZzOt.js";import"./Cross-F4v7qyNt.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
