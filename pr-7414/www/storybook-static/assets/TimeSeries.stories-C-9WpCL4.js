import{R as e}from"./iframe-ZPRKoU1G.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C6ITfnkV.js";import{R as h}from"./zIndexSlice-BsSz6rnO.js";import{C as g}from"./ComposedChart-BHINqNhm.js";import{L as x}from"./Line-B1M2NTAD.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-YZIwu0YS.js";import{T as V}from"./Tooltip-CcXCtMjc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CGa3_Ok6.js";import"./CartesianAxis-BoMdju9k.js";import"./Layer-Cw8ar51S.js";import"./resolveDefaultProps-DXwWTI5c.js";import"./Text-Cx16epvV.js";import"./DOMUtils-CWTdPns0.js";import"./isWellBehavedNumber-C1VSg6lY.js";import"./Label-BBlujwtM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C_hsauba.js";import"./index-CDtIYzd-.js";import"./index-DWchyl7z.js";import"./types-BUDAoUUu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bj0AstQ5.js";import"./immer-Dqh26iK6.js";import"./RechartsWrapper-BYyxQWjf.js";import"./index-D9shaHbl.js";import"./index-CyTcUuX3.js";import"./axisSelectors-B6X9oFFj.js";import"./CartesianChart-9gHk08A4.js";import"./chartDataContext-C8DnaOK4.js";import"./CategoricalChart-C8cl1dv9.js";import"./Curve-ePYEilGq.js";import"./step-BGVwbWHg.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D4M5eO1p.js";import"./useAnimationId-CZUjtEje.js";import"./string-B6fdYHAA.js";import"./ActivePoints-BkkgePC3.js";import"./Dot-DfLTDUuc.js";import"./RegisterGraphicalItemId-NfBTs_Yc.js";import"./ErrorBarContext-C1hygpA9.js";import"./GraphicalItemClipPath-DcCaGC5D.js";import"./SetGraphicalItem-Dl4Vmegz.js";import"./getRadiusAndStrokeWidthFromDot-BJaZ3V1E.js";import"./ActiveShapeUtils-T50lNrG4.js";import"./useElementOffset-p0zX6-6P.js";import"./uniqBy-BfU0_UHc.js";import"./iteratee-Coqn7yfn.js";import"./Cross-DCF7w7-e.js";import"./Rectangle-ToWWd5IB.js";import"./Sector-CUM60_Y6.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
