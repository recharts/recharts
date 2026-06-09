import{R as e}from"./iframe-Dn7uhoyL.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CM-PbRui.js";import{R as h}from"./zIndexSlice-CVPi3ttj.js";import{C as g}from"./ComposedChart-CB9Nre2s.js";import{L as x}from"./Line-Dj80C8Yq.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Cgmb0cG0.js";import{T as V}from"./Tooltip-CmBrx--3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BWJg7GwY.js";import"./CartesianAxis-BFlE9wN2.js";import"./Layer-0_0lU0ce.js";import"./resolveDefaultProps-CdaF0R9o.js";import"./Text-Coel_U_-.js";import"./DOMUtils-DMf79wlK.js";import"./isWellBehavedNumber-CWLsfq8q.js";import"./Label-BkxCdWVF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DWtyWVlG.js";import"./index-Cy5HZ0nr.js";import"./index-CSiJtewq.js";import"./types-Bnw4G7MR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C-NsLko8.js";import"./immer-jPz9tOCf.js";import"./RechartsWrapper-BxRk2Gdp.js";import"./index-Bq40lsYa.js";import"./index-DD0InOiJ.js";import"./axisSelectors-CcayQcVn.js";import"./CartesianChart-BTxfKGwU.js";import"./chartDataContext-CxM1m1he.js";import"./CategoricalChart-vFRRVoOy.js";import"./Curve-dLTkUQDk.js";import"./step-DtaB3Afi.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BOxaWbpG.js";import"./useAnimationId-DyeHQUGR.js";import"./string-B6fdYHAA.js";import"./ActivePoints-BJJpASAl.js";import"./Dot-BCY87lLt.js";import"./RegisterGraphicalItemId-DNlA1n-y.js";import"./ErrorBarContext-8EwqaTjA.js";import"./GraphicalItemClipPath-Ml5Lm9cP.js";import"./SetGraphicalItem-r_k8Lha2.js";import"./getRadiusAndStrokeWidthFromDot-BlZL4Q4R.js";import"./ActiveShapeUtils-dzMUbVJX.js";import"./useElementOffset-BS2jKIzO.js";import"./uniqBy-BegxbEUU.js";import"./iteratee-BQ8u-VLy.js";import"./Cross-D5X-79vf.js";import"./Rectangle-C7YkQMq8.js";import"./Sector-D2HI9UwR.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
