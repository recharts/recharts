import{R as e}from"./iframe-pb0eGUzQ.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C8pfECSp.js";import{R as h}from"./zIndexSlice-Cv3joHsa.js";import{C as g}from"./ComposedChart-BYOHyhAB.js";import{L as x}from"./Line-BK-thIbQ.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D40q8NYs.js";import{T as V}from"./Tooltip-DiQYdaUL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-DVH187SM.js";import"./Layer-CsF7idKX.js";import"./resolveDefaultProps-BIcSgHHm.js";import"./Text-Bq7mJ7MP.js";import"./DOMUtils-C_JPJk8X.js";import"./isWellBehavedNumber-sYswO0zz.js";import"./useId-xKOkSlvZ.js";import"./useBackwardsCompatibleTheme-DGBzFLd0.js";import"./Label-C-65Vs2n.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BlGsGj6Y.js";import"./index-CadbAa9f.js";import"./index-B3wblxBJ.js";import"./types-CuZ7ciTr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BIUrSjZy.js";import"./throttle-CLVKwQCr.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BvkKxzHL.js";import"./index-Ci6SDbSO.js";import"./index-DmA7_hIT.js";import"./axisSelectors-RMGVuaxT.js";import"./CartesianChart-D9u_fkX_.js";import"./chartDataContext-tQQ7C7rr.js";import"./CategoricalChart-DraDT8M3.js";import"./Curve-CGTwaLHs.js";import"./step-BNEQKmaP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DvU5M9qH.js";import"./useAnimationId-hkXeXWT6.js";import"./ActivePoints-CH_dCX-F.js";import"./Dot-DmEXtJXC.js";import"./RegisterGraphicalItemId-BA80SMDx.js";import"./ErrorBarContext-BE4oep3j.js";import"./GraphicalItemClipPath-B6_R3NgE.js";import"./SetGraphicalItem-DoaJ7VXW.js";import"./getRadiusAndStrokeWidthFromDot-DyhskonW.js";import"./ActiveShapeUtils-DGHBRMQa.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-BhgReHS5.js";import"./uniqBy-B7PLiSrR.js";import"./iteratee-DkLl-_WR.js";import"./Cross-BP7WwU5P.js";import"./Rectangle-A7Xjxu5S.js";import"./util-Dxo8gN5i.js";import"./Sector-D61FKZNa.js";const It={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const qt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,qt as __namedExportsOrder,It as default};
