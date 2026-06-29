import{R as e}from"./iframe-CszBinxB.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-oYdZhs_K.js";import{R as h}from"./zIndexSlice-CutJbhUL.js";import{C as g}from"./ComposedChart-B908q7UQ.js";import{L as x}from"./Line-CF2pkJ7d.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-8f-0eAbn.js";import{T as V}from"./Tooltip-D6DyKh1e.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Dkt-pB45.js";import"./CartesianAxis-BWqORJkK.js";import"./Layer-CbC5ZndY.js";import"./resolveDefaultProps-Bibg6aom.js";import"./Text-BedxJwrY.js";import"./DOMUtils-BDWRPNb8.js";import"./isWellBehavedNumber-CQgoIKii.js";import"./Label-Dp0h3UHP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BWnK9pgn.js";import"./index-Dk3UIdqq.js";import"./index-CK8GAH5B.js";import"./types-BcRZVSBA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BApmRI5D.js";import"./throttle-D83-jpt2.js";import"./RechartsWrapper-B9WMJT6y.js";import"./index-CJ5FwB5R.js";import"./index-CqsgrxyY.js";import"./axisSelectors-ChU_3Lvt.js";import"./CartesianChart-CKqsh66i.js";import"./chartDataContext-D1nSjPO9.js";import"./CategoricalChart-KozYfQM0.js";import"./Curve-BU7ZSeTV.js";import"./step-F1REG5Zy.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-dM5mhDfD.js";import"./useAnimationId-DACL8E3O.js";import"./ActivePoints-D0tv5d-k.js";import"./Dot-D-4kDITN.js";import"./RegisterGraphicalItemId-BWZQesOM.js";import"./ErrorBarContext--gRpVtKO.js";import"./GraphicalItemClipPath-BrN2bI9m.js";import"./SetGraphicalItem-DWL3HNya.js";import"./getRadiusAndStrokeWidthFromDot-DQWqw49n.js";import"./ActiveShapeUtils-BBAZWV6w.js";import"./useElementOffset-BXwdlwFe.js";import"./uniqBy-BCYeHSUY.js";import"./iteratee-zMs8qLuf.js";import"./Cross-Djz1b2yT.js";import"./Rectangle-3wzUTOWc.js";import"./util-Dxo8gN5i.js";import"./Sector-QnOONA2W.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
