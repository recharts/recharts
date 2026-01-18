import{e}from"./iframe-DZy4Dead.js";import{X as s}from"./XAxis-B-yW469b.js";import{R as y}from"./arrayEqualityCheck-ApBChTfQ.js";import{C as g}from"./ComposedChart-B1Kc7L3U.js";import{L as x}from"./Line-gll_RWLu.js";import{R as S}from"./RechartsHookInspector-BQ2LFFE8.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-CNnm75NT.js";import{T as O}from"./Tooltip-DkTYviFG.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bf5GaSqV.js";import"./CartesianAxis-CJ1CYBzd.js";import"./Layer-Bpoel1Lp.js";import"./Text-68IXtrlK.js";import"./DOMUtils-DwLev0Y8.js";import"./Label-BnGgD6KR.js";import"./PolarUtils-Dc-YJkTz.js";import"./ZIndexLayer-DncsytRr.js";import"./zIndexSlice-BHURSyYA.js";import"./types-BfEpf9p_.js";import"./hooks-ajKNzoip.js";import"./CategoricalChart-Da7z_ebg.js";import"./RechartsWrapper-nPRv-TTN.js";import"./CartesianChart-C9Umwsg3.js";import"./chartDataContext-C_SJIf2I.js";import"./ReactUtils-MfSKnK6Q.js";import"./ActivePoints-Kh0sgV9R.js";import"./Dot-DpvXwtTp.js";import"./RegisterGraphicalItemId-DFrBVe2X.js";import"./ErrorBarContext-Du58iR9d.js";import"./GraphicalItemClipPath-DT3FtvpA.js";import"./SetGraphicalItem-6vLNF4l0.js";import"./useAnimationId-C4mX0K92.js";import"./getRadiusAndStrokeWidthFromDot-BGEPQyal.js";import"./ActiveShapeUtils-BmYdORD-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DS0sw2g4.js";import"./Trapezoid-C-7zXkUX.js";import"./Sector-Cjw5cIeP.js";import"./Symbols-BE9qwwFU.js";import"./Curve-ChmxEyvD.js";import"./index-SrSy7NGQ.js";import"./ChartSizeDimensions-DagnIVtO.js";import"./OffsetShower-C8_o4Gkp.js";import"./PlotAreaShower-CJCyQCMM.js";import"./useElementOffset-VabGtOpj.js";import"./iteratee-DGxwmvkZ.js";import"./Cross-COQhDoU6.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
