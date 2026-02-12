import{e}from"./iframe-faEGnlhT.js";import{X as s}from"./XAxis-CFbqEzYE.js";import{R as y}from"./arrayEqualityCheck-C0DmTAi-.js";import{C as g}from"./ComposedChart-BvQ6aYug.js";import{L as x}from"./Line-BKU09TBH.js";import{R as S}from"./RechartsHookInspector-DorgIABE.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-B-QEn76s.js";import{T as O}from"./Tooltip-DILGbGVC.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-E1K0A3LW.js";import"./CartesianAxis-D4ASWqc1.js";import"./Layer-BVbadyP2.js";import"./Text-TFqO-ApL.js";import"./DOMUtils-z-S8PuYj.js";import"./Label-DHVy6qmW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dp_sNRVX.js";import"./zIndexSlice-B9CGjDBz.js";import"./types-Bw-NWEAT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-BCFTrc9K.js";import"./RechartsWrapper-C18N7NWG.js";import"./CartesianChart-BcS0gbJv.js";import"./chartDataContext--QJQie47.js";import"./CategoricalChart-DS6-A_Eu.js";import"./ReactUtils-DIvlatZp.js";import"./ActivePoints-DUFMuXwg.js";import"./Dot--Iy9brq0.js";import"./RegisterGraphicalItemId-D75CZCwF.js";import"./ErrorBarContext-BZkVSpWJ.js";import"./GraphicalItemClipPath-Cxy9t3jj.js";import"./SetGraphicalItem-Dla_HDr3.js";import"./useAnimationId-KEEDc5eO.js";import"./getRadiusAndStrokeWidthFromDot-ngsgrZAG.js";import"./ActiveShapeUtils-DBh9LMnt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DX06SiF4.js";import"./Trapezoid-BUZP6yXx.js";import"./Sector-VklTrsUw.js";import"./Symbols-C64BIrkw.js";import"./Curve-Digajzg7.js";import"./index-ek5vanJI.js";import"./ChartSizeDimensions-BIBiiHxa.js";import"./OffsetShower-syvld0TV.js";import"./PlotAreaShower-LZVAobRV.js";import"./useElementOffset-CI2OB4g8.js";import"./iteratee-COpg3UGo.js";import"./Cross-HF6www-7.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
