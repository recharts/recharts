import{R as e}from"./iframe-DeA6Jpe3.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CWYh7d5o.js";import{R as h}from"./zIndexSlice-BC0f17EQ.js";import{C as g}from"./ComposedChart-Bx8jkPS5.js";import{L as x}from"./Line-DX7Ebcir.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BpDmqGQL.js";import{T as V}from"./Tooltip-DhmV0FMM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-D6SDyMBH.js";import"./Layer-EcnCd1Gq.js";import"./resolveDefaultProps-CSkrQNmh.js";import"./Text-D2SjxJqk.js";import"./DOMUtils-Bt_ISucd.js";import"./isWellBehavedNumber-QapkByze.js";import"./Label-DxF7lRqe.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B9FDBqTJ.js";import"./index-COu95pDD.js";import"./index-Cgi5iiaO.js";import"./types-Dc_zINiL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BS64flHf.js";import"./throttle-CrUA5muc.js";import"./RechartsWrapper-B64-BdAv.js";import"./index-DH7_6A6k.js";import"./index-_OzwQHli.js";import"./axisSelectors-D1wvQQnO.js";import"./CartesianChart-BM30Ht3L.js";import"./chartDataContext-DUEOLv6k.js";import"./CategoricalChart-BGS1Syzx.js";import"./Curve-hairJGsw.js";import"./step-cipjXRUD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C9_zvyTE.js";import"./useAnimationId-DmZXjvo1.js";import"./ActivePoints-DXrZqI9p.js";import"./Dot-BnJj13Wl.js";import"./RegisterGraphicalItemId-DYqiPt6w.js";import"./ErrorBarContext-DdrEBPjm.js";import"./GraphicalItemClipPath-BPKm-IHy.js";import"./SetGraphicalItem-D9c-Ll1Q.js";import"./getRadiusAndStrokeWidthFromDot-JO35KbEr.js";import"./ActiveShapeUtils-DhlcDB3a.js";import"./useElementOffset-CIvcKMtZ.js";import"./uniqBy-UFmqCWmo.js";import"./iteratee-syIuvkdt.js";import"./Cross-CJOqCG5U.js";import"./Rectangle-CQJfdyEy.js";import"./util-Dxo8gN5i.js";import"./Sector-aK76tY29.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
