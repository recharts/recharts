import{R as e}from"./iframe-DFAuwNet.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DCGzkxjE.js";import{R as h}from"./zIndexSlice-BwFDZpKd.js";import{C as g}from"./ComposedChart-q9x7DXH3.js";import{L as x}from"./Line-Ck4HwCGm.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Bflz5-05.js";import{T as V}from"./Tooltip-zZkLTzqk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bfs700CB.js";import"./CartesianAxis-DrCLR5OG.js";import"./Layer-pSJwYJA9.js";import"./resolveDefaultProps-DvMn3fRK.js";import"./Text-D4VTZiA_.js";import"./DOMUtils-Cjgkd6jo.js";import"./isWellBehavedNumber-DOBIUQY2.js";import"./Label-BiYGQ8wu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CzNUPV7f.js";import"./index-D5vqZcHk.js";import"./index-XHGddEUW.js";import"./types-CKCIF696.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C1GYWdqG.js";import"./immer-D4TP_Tl0.js";import"./RechartsWrapper-B5EEfMW7.js";import"./index-Bdvp9zfN.js";import"./index-CzPHYk5P.js";import"./axisSelectors-rO5_sQtu.js";import"./CartesianChart-DsW2iWMz.js";import"./chartDataContext-qOKnmm5w.js";import"./CategoricalChart-F9q04IPB.js";import"./Curve-qtCfGxfc.js";import"./step-BT8dCn-b.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BG4KszHn.js";import"./useAnimationId-BPtcTRZO.js";import"./string-B6fdYHAA.js";import"./ActivePoints-BsPL6iaG.js";import"./Dot-B8AKLV5l.js";import"./RegisterGraphicalItemId-CzkMeR6l.js";import"./ErrorBarContext-BoGExbnB.js";import"./GraphicalItemClipPath-DXkB_bbX.js";import"./SetGraphicalItem-CYy4gzAa.js";import"./getRadiusAndStrokeWidthFromDot-rwyYVhSm.js";import"./ActiveShapeUtils-CrgbqME0.js";import"./useElementOffset-Cr66zOZa.js";import"./uniqBy-BxbvDsAq.js";import"./iteratee-BYBBNzGi.js";import"./Cross-DEUDd6Yc.js";import"./Rectangle-VpINru7-.js";import"./Sector-6Z0dG1em.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
