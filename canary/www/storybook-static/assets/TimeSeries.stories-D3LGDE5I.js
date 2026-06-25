import{R as e}from"./iframe-CpH4jn8g.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BqLLe0Cs.js";import{R as h}from"./zIndexSlice-CMsbRcVo.js";import{C as g}from"./ComposedChart-DZX4aRXt.js";import{L as x}from"./Line-CTejxpOS.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-hekr18xW.js";import{T as V}from"./Tooltip-2Sgew7i7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DfDzGUS7.js";import"./CartesianAxis-lejBVVP2.js";import"./Layer-CpyyR4fH.js";import"./resolveDefaultProps-DGN954Kv.js";import"./Text-DxL0BXFO.js";import"./DOMUtils-BSMSB0a3.js";import"./isWellBehavedNumber-6OhSnnoK.js";import"./Label-BID2wGRS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-FLcdyCMW.js";import"./index--z9jIKZg.js";import"./index-wpdvZnuB.js";import"./types-CDIAbI3v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D-wmUWoC.js";import"./immer-C21IJxSF.js";import"./RechartsWrapper-TUYhIbD6.js";import"./index-B6von4ou.js";import"./index-CB2lo7iV.js";import"./axisSelectors-Bq_vtAr0.js";import"./CartesianChart-BW_KV3Uo.js";import"./chartDataContext-CNUo9Q_N.js";import"./CategoricalChart-CJCbZaD2.js";import"./Curve-2uMIoq2i.js";import"./step-COWbUyG4.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BjSZm7AL.js";import"./useAnimationId-DOUqN62f.js";import"./ActivePoints-9ROC9Lt_.js";import"./Dot-CxmB6f2U.js";import"./RegisterGraphicalItemId-BwHF-Xvv.js";import"./ErrorBarContext-DQcN79r3.js";import"./GraphicalItemClipPath-CjdnX9P0.js";import"./SetGraphicalItem-BKY8M4LB.js";import"./getRadiusAndStrokeWidthFromDot-BpydaN9S.js";import"./ActiveShapeUtils-DtM6eKjz.js";import"./useElementOffset-FeBedyZd.js";import"./uniqBy-DybamGh7.js";import"./iteratee-D0Q2blRW.js";import"./Cross-Ci8qvtCb.js";import"./Rectangle-BETJzIFT.js";import"./util-Dxo8gN5i.js";import"./Sector-iVL0Cpd1.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
