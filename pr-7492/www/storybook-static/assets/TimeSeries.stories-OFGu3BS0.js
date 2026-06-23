import{R as e}from"./iframe-C3hysSwX.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Bz5F1_iJ.js";import{R as h}from"./zIndexSlice-jLrLCsrp.js";import{C as g}from"./ComposedChart-4b-0Cq8-.js";import{L as x}from"./Line-BVlSac6Z.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Z5oWCNO5.js";import{T as V}from"./Tooltip-DO4Ooh_G.js";import"./preload-helper-Dp1pzeXC.js";import"./get-4mmuOJ4Q.js";import"./CartesianAxis-DJwGDBXD.js";import"./Layer-BWZwdMd6.js";import"./resolveDefaultProps-XPHM9Bxg.js";import"./Text-9LavA5GP.js";import"./DOMUtils-B0ueEniv.js";import"./isWellBehavedNumber-Cfqt3JW2.js";import"./Label-BY3nn8Dv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BbmqSC7x.js";import"./index-BUU-eT_B.js";import"./index-DdpCgkK0.js";import"./types-B-fiXt0f.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CSlp22Dw.js";import"./immer-BNUBbCyS.js";import"./RechartsWrapper-CJVzzpRJ.js";import"./index-BV0Ox4K8.js";import"./index-By0blv9S.js";import"./axisSelectors-BKkILLr_.js";import"./CartesianChart-Dz5Andp2.js";import"./chartDataContext-Da5IPa1T.js";import"./CategoricalChart-BUhA_1lj.js";import"./Curve-6434-3z9.js";import"./step-C_2ct0pZ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CONL8zCq.js";import"./useAnimationId-CTVdzEbK.js";import"./ActivePoints-iKVh12Ay.js";import"./Dot-B1rRcV2J.js";import"./RegisterGraphicalItemId-o0SeLVTS.js";import"./ErrorBarContext-D24MXSMJ.js";import"./GraphicalItemClipPath-Cs8iTjY6.js";import"./SetGraphicalItem-CmkEoewy.js";import"./getRadiusAndStrokeWidthFromDot-CVqEtKFE.js";import"./ActiveShapeUtils-DTMmpBlQ.js";import"./useElementOffset-TFATomwh.js";import"./uniqBy-rAXM5un4.js";import"./iteratee-Bj0cTPCe.js";import"./Cross-BGe6GpMn.js";import"./Rectangle-D6Gug0yv.js";import"./util-Dxo8gN5i.js";import"./Sector-Cq5G9PM-.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
