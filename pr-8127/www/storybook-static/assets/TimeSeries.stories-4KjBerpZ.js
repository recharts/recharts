import{R as e}from"./iframe-l1Y42C0u.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-B9K8Q1Xb.js";import{R as h}from"./zIndexSlice-B33nqsCb.js";import{C as g}from"./ComposedChart-0uZutU6k.js";import{L as x}from"./Line-CJUUfYSp.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B5Y8SIz5.js";import{T as V}from"./Tooltip-Chbmqq1h.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-tpqsI94N.js";import"./Layer-euAv7Vlw.js";import"./resolveDefaultProps-1jZi99P0.js";import"./Text-B6K4_AwF.js";import"./DOMUtils-D4PcHABk.js";import"./ZIndexLayer-DxyEEQXG.js";import"./index-DIs184pY.js";import"./index-Cqq6zn6Z.js";import"./Label-sWz5CiLk.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BQIs9A7o.js";import"./throttle-DAyvkz9h.js";import"./types-CrZHDfLN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D6aSCZ50.js";import"./index-Bn03Joy2.js";import"./index-BwfxQem6.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-D7HUEi6M.js";import"./RechartsWrapper-DOuMjlQh.js";import"./index-BL-lBVJK.js";import"./CartesianChart-DP0lCfag.js";import"./ZIndexPortal-DmDlsnpL.js";import"./CategoricalChart-CsG2T3-z.js";import"./Curve-B3MncDoj.js";import"./step-Be4HSYh6.js";import"./path-DyVhHtw_.js";import"./LabelList-CqnzZffr.js";import"./ActivePoints-C9qJ4yHK.js";import"./Dot-CvycDJmI.js";import"./activeStyles-De0IjX-U.js";import"./useAnimationId-Df3Y-xS6.js";import"./dataEntryStyles-D_KE_N47.js";import"./fillDefinitions-AHxQevDT.js";import"./themeFill-DQcF-Fqd.js";import"./Symbols-CQXeMdB_.js";import"./symbol-K2q-awoK.js";import"./ErrorBarContext-xxN9WryY.js";import"./SetGraphicalItem-Do2v7-d1.js";import"./getRadiusAndStrokeWidthFromDot-DDaIFX1-.js";import"./ActiveShapeUtils-CSx2HuI1.js";import"./useEffectiveDataKey-Dv99CamK.js";import"./useElementOffset-Dc6g4T8Y.js";import"./uniqBy-BXAphbyZ.js";import"./iteratee-BoMr2KG7.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BgI2taLq.js";import"./Rectangle-Gcg8iRps.js";import"./util-Dxo8gN5i.js";import"./Sector-B4KLeSUR.js";const zt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Gt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Gt as __namedExportsOrder,zt as default};
