import{e}from"./iframe-BjYhBrjl.js";import{X as s}from"./XAxis-CWT2ipPv.js";import{R as y}from"./arrayEqualityCheck-CNWOZzwZ.js";import{C as g}from"./ComposedChart-jXkond5b.js";import{L as x}from"./Line-B0hU4ZgF.js";import{R as S}from"./RechartsHookInspector-BYUxShfd.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-DEfYHCC1.js";import{T as O}from"./Tooltip-CCnn3vru.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CW-CYJ5T.js";import"./CartesianAxis-Bk_9WRuu.js";import"./Layer-DXlUs9xn.js";import"./Text-BkZHxLFB.js";import"./DOMUtils-BymtfGut.js";import"./Label-DVod4zfM.js";import"./PolarUtils-DQj3EbdT.js";import"./ZIndexLayer-DHhRDpk5.js";import"./zIndexSlice-CZl4BXnF.js";import"./types-Cdxv11pV.js";import"./hooks-Ddl0ZTMw.js";import"./CategoricalChart-DF3wtmgo.js";import"./RechartsWrapper-kzv9It-X.js";import"./CartesianChart-DCPzGlsn.js";import"./chartDataContext-BU8YO9rr.js";import"./ReactUtils-BfHCN5KQ.js";import"./ActivePoints-B3Cg6Vyy.js";import"./Dot-CTyFlHPc.js";import"./RegisterGraphicalItemId-CbyAeKpp.js";import"./ErrorBarContext-Bfs-DHyT.js";import"./GraphicalItemClipPath-DwCyfGQq.js";import"./SetGraphicalItem-D87xV8bI.js";import"./useAnimationId-Da3IHhB2.js";import"./getRadiusAndStrokeWidthFromDot-CjQtZ2j8.js";import"./ActiveShapeUtils-C0Pv8fnx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-G9VjTpux.js";import"./Trapezoid-dLSghC9y.js";import"./Sector-DDjBm9K3.js";import"./Symbols-Df7Es6QZ.js";import"./Curve-Dsad01Eu.js";import"./index-CwPjVI_1.js";import"./ChartSizeDimensions-D7d_cei-.js";import"./OffsetShower-DpV5TBrr.js";import"./PlotAreaShower-D3NMg3HB.js";import"./useElementOffset-DMz3ZnQd.js";import"./iteratee-DmKJxQnM.js";import"./Cross-DSxx1_Ft.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
