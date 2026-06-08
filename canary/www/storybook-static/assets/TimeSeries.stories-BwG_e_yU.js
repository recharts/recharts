import{R as e}from"./iframe-GBGc-iKq.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BBjH0uDR.js";import{R as h}from"./zIndexSlice-DP0tLqWW.js";import{C as g}from"./ComposedChart-BAWAmmMR.js";import{L as x}from"./Line-BLIZlFIO.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Dym64WYU.js";import{T as V}from"./Tooltip-B4XvSEH4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DICUyaHN.js";import"./CartesianAxis-DQP4bonx.js";import"./Layer-CDGRbd8f.js";import"./resolveDefaultProps-DIrI2E0T.js";import"./Text-B4CLUneY.js";import"./DOMUtils-BP3f5q3h.js";import"./isWellBehavedNumber-Lbc_fCaY.js";import"./Label-DSpdGeyH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BMlwN-1Q.js";import"./index-WIkdQGR_.js";import"./index-Bj7NMbSa.js";import"./types-BTPiehg7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CwhUMpGJ.js";import"./immer-9IN4E6VX.js";import"./RechartsWrapper-CY1_ev_Z.js";import"./index-DDYWU-5r.js";import"./index-DEGNeWRW.js";import"./axisSelectors-DUsVRTIw.js";import"./CartesianChart-Ci5TMZqv.js";import"./chartDataContext-Di_sY_cY.js";import"./CategoricalChart-L_ONP4HK.js";import"./Curve-B9n6ABfY.js";import"./step-CxLlu8x6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C29R-vhg.js";import"./useAnimationId-BXgA3n2L.js";import"./string-B6fdYHAA.js";import"./ActivePoints-CBmfjAqp.js";import"./Dot-Jn68Tyru.js";import"./RegisterGraphicalItemId-C9tnUoji.js";import"./ErrorBarContext-BIvto65z.js";import"./GraphicalItemClipPath-CocmCyqp.js";import"./SetGraphicalItem-5bSLaCIx.js";import"./getRadiusAndStrokeWidthFromDot-nN08QDm9.js";import"./ActiveShapeUtils-DlvuUpon.js";import"./useElementOffset-_LlNMZ1b.js";import"./uniqBy-BPbPdDdp.js";import"./iteratee-DqpINt84.js";import"./Cross-DLvWwON2.js";import"./Rectangle-C36d9lkh.js";import"./Sector-B3N5mJTn.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
