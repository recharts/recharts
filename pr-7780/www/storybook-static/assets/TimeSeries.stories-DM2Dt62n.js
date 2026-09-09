import{R as e}from"./iframe-CrjMmK-P.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Bf99Djp-.js";import{R as h}from"./zIndexSlice-BjJGmtkk.js";import{C as g}from"./ComposedChart-DWFup1Gh.js";import{L as x}from"./Line-BdPUp7B4.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-60bYpT2W.js";import{T as V}from"./Tooltip-CPrKDQ9h.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-B8LyCo9q.js";import"./Layer-D9-s7BIj.js";import"./resolveDefaultProps-1lRPudDL.js";import"./Text-CvoG-yND.js";import"./DOMUtils-BLhe2-Wn.js";import"./isWellBehavedNumber-i-P4IxnU.js";import"./useId-BEuvre-A.js";import"./useBackwardsCompatibleTheme-C_kcEgOz.js";import"./Label-BUscAhBU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BnhEIQdT.js";import"./index-C29X7Fc2.js";import"./index-BDweFuqO.js";import"./types-DQIGWyvO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CoKKbA57.js";import"./throttle-DvPRoUwa.js";import"./index-DhUbeUHh.js";import"./index-C0KmE10p.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-W15Lm7G0.js";import"./axisSelectors-CArdhpNf.js";import"./index-p1bk8TMl.js";import"./CartesianChart-CtX-pqzv.js";import"./chartDataContext-rtr64WFG.js";import"./CategoricalChart-RhdZ5xjE.js";import"./Curve-DmmzRQeA.js";import"./step-XIk4Qxhk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DhhQShtD.js";import"./useAnimationId-yNh7qZi1.js";import"./ActivePoints-l6QKzYun.js";import"./Dot-BglkAryw.js";import"./RegisterGraphicalItemId-BtD1DcTG.js";import"./ErrorBarContext-DVTSO5_6.js";import"./GraphicalItemClipPath-d2m1y1AJ.js";import"./SetGraphicalItem-Cz1BmFYo.js";import"./getRadiusAndStrokeWidthFromDot-BZvBgzm6.js";import"./ActiveShapeUtils-DNRW1wio.js";import"./useGraphicalItemIdentity-D4eInQUL.js";import"./useElementOffset-D3QBqJsK.js";import"./uniqBy-BOWmp87N.js";import"./iteratee-5CO9aB2p.js";import"./Cross-CcupEozg.js";import"./Rectangle-4U1uwwED.js";import"./util-Dxo8gN5i.js";import"./Sector-DVSg-Fqk.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
