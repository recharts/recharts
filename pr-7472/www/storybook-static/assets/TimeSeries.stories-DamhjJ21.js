import{R as e}from"./iframe-BY-61mf3.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BqqI2L9m.js";import{R as h}from"./zIndexSlice-D5LeFsJF.js";import{C as g}from"./ComposedChart-Bx2_Wy5f.js";import{L as x}from"./Line-6gkt-kev.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BkYTXwQ3.js";import{T as V}from"./Tooltip-BHkumS-I.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CrMrHDfL.js";import"./CartesianAxis-DQMh9jmY.js";import"./Layer-o5jG4U6-.js";import"./resolveDefaultProps-BvLTVmPU.js";import"./Text-A8PySNC6.js";import"./DOMUtils-Dx1NP75k.js";import"./isWellBehavedNumber-CxSUDioC.js";import"./Label-TO2FniFg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BYFtOnRb.js";import"./index-DbrznSTp.js";import"./index-CqG97JZW.js";import"./types-hvByNsoa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-JT8za5Hk.js";import"./immer-B9G3_Kxy.js";import"./RechartsWrapper-TrezbvJj.js";import"./index-CGSMpc0u.js";import"./index-Bdv48GrD.js";import"./axisSelectors-BLK3CBL0.js";import"./CartesianChart-wc_TuFln.js";import"./chartDataContext-CBgaHz3-.js";import"./CategoricalChart-g-2efyUa.js";import"./Curve-BtPdoVvO.js";import"./step-BuJXjF2w.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ByNYS0z8.js";import"./useAnimationId-RV371va_.js";import"./string-B6fdYHAA.js";import"./ActivePoints-gSNPH_nK.js";import"./Dot-zxBqnqxW.js";import"./RegisterGraphicalItemId-BSHaYjsq.js";import"./ErrorBarContext-BTw4S1-S.js";import"./GraphicalItemClipPath-cu7yJN5z.js";import"./SetGraphicalItem-30kWDCTB.js";import"./getRadiusAndStrokeWidthFromDot-D4DkYcfN.js";import"./ActiveShapeUtils-CLaqj2t-.js";import"./useElementOffset-Bk35APbE.js";import"./uniqBy-quBZy4V-.js";import"./iteratee-DAmws9Pf.js";import"./Cross-HSuSokK8.js";import"./Rectangle-BYGnr9Kk.js";import"./Sector-DhnwLkEU.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
