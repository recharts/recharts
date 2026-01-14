import{e}from"./iframe-B8YYEd9G.js";import{X as s}from"./XAxis-Dznlbswx.js";import{R as y}from"./arrayEqualityCheck-BJSPs_LU.js";import{C as g}from"./ComposedChart-4Q9duxf0.js";import{L as x}from"./Line-y7KrniF9.js";import{R as S}from"./RechartsHookInspector-C0QywKAE.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-DqEy3XQD.js";import{T as O}from"./Tooltip-BcyaGgIu.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Css_XkGu.js";import"./CartesianAxis-BAmncUEg.js";import"./Layer-ChuaoeIg.js";import"./Text-DUM-8xR_.js";import"./DOMUtils-C8hDQeGd.js";import"./Label-XqAMTaA_.js";import"./PolarUtils-DYWzGjDu.js";import"./ZIndexLayer-DX8lEGHQ.js";import"./zIndexSlice-BLNkJo_X.js";import"./types-CnVGCqEL.js";import"./hooks-CoDkm5OR.js";import"./CategoricalChart-DO0H3PuU.js";import"./RechartsWrapper-pZyt8ABU.js";import"./CartesianChart-DBZcJX6H.js";import"./chartDataContext-D4iCOjmy.js";import"./ReactUtils-DfY637Lx.js";import"./ActivePoints-Bd5JoJfn.js";import"./Dot-DPdeHNxG.js";import"./RegisterGraphicalItemId-CVcSXCce.js";import"./ErrorBarContext-TR9hiCFQ.js";import"./GraphicalItemClipPath-q0Itpwcd.js";import"./SetGraphicalItem-B4U1VyG2.js";import"./useAnimationId-pnmN_K1g.js";import"./getRadiusAndStrokeWidthFromDot-DM4Yrxyr.js";import"./ActiveShapeUtils-DiiELvjB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-1iaHX5tZ.js";import"./Trapezoid-C7ogOYif.js";import"./Sector-BNyMoo46.js";import"./Symbols-jZ2_n1nU.js";import"./Curve-B-G6e6PZ.js";import"./index-C4mlw0NF.js";import"./ChartSizeDimensions-BeS7eDbq.js";import"./OffsetShower-mhU6p0_K.js";import"./PlotAreaShower-Br2_XSTr.js";import"./useElementOffset-O1atbYZW.js";import"./iteratee-D5HDh4k-.js";import"./Cross-B3ZcMeOk.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
