import{R as e}from"./iframe-gLXjAGh2.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DwB13nw6.js";import{R as h}from"./zIndexSlice-BiRgg5Ku.js";import{C as g}from"./ComposedChart-JJ7W0sdT.js";import{L as x}from"./Line-CYHfJ8Mx.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Ce8TMAGR.js";import{T as V}from"./Tooltip-CuqSWY1W.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Qcb7JOLO.js";import"./CartesianAxis-FCBmPftJ.js";import"./Layer-BmcxLaEj.js";import"./resolveDefaultProps-CF7N32I5.js";import"./Text-CQFVpw6C.js";import"./DOMUtils-yWa5RV4F.js";import"./isWellBehavedNumber-CiIySEg5.js";import"./Label-CJgHZQsX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BnXfcGJ6.js";import"./index-M9vhh8Qk.js";import"./index-konkIWth.js";import"./types-BTt0M0gg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xzybHrTF.js";import"./immer-JN2QralJ.js";import"./RechartsWrapper-BAyuf4sH.js";import"./index-BffiaVbp.js";import"./index-DhIjfNMc.js";import"./axisSelectors-CZIlY7LR.js";import"./CartesianChart-BlBRmLbV.js";import"./chartDataContext-ClIe94X6.js";import"./CategoricalChart-2uN7uMEr.js";import"./Curve-D6HNQ0fs.js";import"./step-DHNiqqKo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BahKKeqN.js";import"./useAnimationId-Cl5wMxi-.js";import"./string-B6fdYHAA.js";import"./ActivePoints-gwX5g1ZR.js";import"./Dot-B_5lkSZo.js";import"./RegisterGraphicalItemId-Dn8a3wZC.js";import"./ErrorBarContext-DTXTD-Qt.js";import"./GraphicalItemClipPath-0uk6nwou.js";import"./SetGraphicalItem-Ce5UA7yP.js";import"./getRadiusAndStrokeWidthFromDot--8r5PZrP.js";import"./ActiveShapeUtils-C5UVGI0p.js";import"./useElementOffset-BY9xe1Fd.js";import"./uniqBy-DwtP5gK0.js";import"./iteratee-Dfb5foZq.js";import"./Cross-CrYY4UWB.js";import"./Rectangle-DMbb_PeV.js";import"./Sector-gyVqqxj3.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
