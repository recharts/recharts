import{R as e}from"./iframe-BWYv0W0I.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DpTHfSKL.js";import{R as h}from"./zIndexSlice-BZjtJtRO.js";import{C as g}from"./ComposedChart-3rsPeh8g.js";import{L as x}from"./Line-BatACtMg.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CFHPl3Hx.js";import{T as V}from"./Tooltip-BgsINPYu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-YpvzSERN.js";import"./CartesianAxis-DUktxQyy.js";import"./Layer-Bj1H698J.js";import"./resolveDefaultProps-_5I5KHm0.js";import"./Text-z-woKoAn.js";import"./DOMUtils-CcdNUrj8.js";import"./isWellBehavedNumber-BvLe-n8Z.js";import"./Label-Df5r-7el.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DFHa7v_x.js";import"./index-DTxMd3-u.js";import"./index-BcXaHiqG.js";import"./types-Dytxgf6V.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BylsjMl6.js";import"./immer-BPqm6WO1.js";import"./RechartsWrapper-A48iA3eZ.js";import"./index-C30dpYE2.js";import"./index-ByNF5ywv.js";import"./axisSelectors-BqS5J0kn.js";import"./CartesianChart-CWrMrl0B.js";import"./chartDataContext-8Yx6Y713.js";import"./CategoricalChart-COWvBEEg.js";import"./Curve-u414SiC4.js";import"./step-FVBZPP9Y.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DhxwbWlw.js";import"./useAnimationId-CZnp92c4.js";import"./ActivePoints-_ILc4AHk.js";import"./Dot-DQMh135C.js";import"./RegisterGraphicalItemId-CK6cp7E5.js";import"./ErrorBarContext-CwrVQcWY.js";import"./GraphicalItemClipPath-lDfebASI.js";import"./SetGraphicalItem-DQ0Lh0bj.js";import"./getRadiusAndStrokeWidthFromDot-DsWQpG0J.js";import"./ActiveShapeUtils-iodju3ZT.js";import"./useElementOffset-DLPfaP7i.js";import"./uniqBy-Bag5RbDs.js";import"./iteratee-ByXW7YOK.js";import"./Cross-nCh6kSUZ.js";import"./Rectangle-CT2eea31.js";import"./util-Dxo8gN5i.js";import"./Sector-zHxlDDaP.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
