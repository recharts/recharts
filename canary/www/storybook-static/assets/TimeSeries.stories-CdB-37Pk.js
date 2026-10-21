import{R as e}from"./iframe-BFObQXXM.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-qu1te6gL.js";import{R as h}from"./zIndexSlice-BvSBG_sk.js";import{C as g}from"./ComposedChart-DfJYfYyB.js";import{L as x}from"./Line-fvr9nFjR.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Da5OAhLE.js";import{T as V}from"./Tooltip-qCP9WKi1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-LKjUZ976.js";import"./Layer-B5sm7Diz.js";import"./resolveDefaultProps-BRFxqhI5.js";import"./Text-CJhUB4hq.js";import"./pageBackground-C-W7t-2X.js";import"./isWellBehavedNumber-Di8XhGY_.js";import"./useId-C4vD49YQ.js";import"./useBackwardsCompatibleTheme-SoWlTCM6.js";import"./Label-DDOQ4R0s.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dx_I1S2M.js";import"./index-BDLQEm-M.js";import"./index-DuyOw6al.js";import"./types-D0QZpxYL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ElbwHqBe.js";import"./throttle-DjO6J8yc.js";import"./index-D88_648m.js";import"./index-DgBcae_n.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-CVf0-qpU.js";import"./RechartsWrapper-D0l9eNV0.js";import"./index-D3gbqmrd.js";import"./CartesianChart-D-DmleFH.js";import"./chartDataContext-DLE8D3iQ.js";import"./CategoricalChart-CTQAivkk.js";import"./Curve-vRM4WLtL.js";import"./step-DZUEZKzr.js";import"./path-DyVhHtw_.js";import"./activeStyles-CWTGeeaa.js";import"./useAnimationId-5IpIdjB8.js";import"./dataEntryStyles-BYgKVvun.js";import"./ActivePoints-u30qQxp9.js";import"./Dot-D0UZAudw.js";import"./ErrorBarContext-A6KbAgUZ.js";import"./GraphicalItemClipPath-Veko-L0U.js";import"./SetGraphicalItem-UiOjxlQM.js";import"./getRadiusAndStrokeWidthFromDot-l8Ertzo7.js";import"./ActiveShapeUtils-3kPY9Bl6.js";import"./useEffectiveDataKey-DoMzN8uO.js";import"./useElementOffset-CATtOAUw.js";import"./uniqBy-Cqj_Zr9d.js";import"./iteratee-CKc5G6nr.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CGAu3OVA.js";import"./Rectangle-X-8XVq24.js";import"./util-Dxo8gN5i.js";import"./Sector-rRUrdzKs.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
