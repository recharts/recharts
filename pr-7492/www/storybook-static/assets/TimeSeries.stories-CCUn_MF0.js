import{R as e}from"./iframe-BlvZN_ps.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-KWtoy5jB.js";import{R as h}from"./zIndexSlice-D5hgUm6A.js";import{C as g}from"./ComposedChart--jP60YbA.js";import{L as x}from"./Line-H_lUcLKC.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D-SQjsd3.js";import{T as V}from"./Tooltip-CQikDSKZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-ChlOH98w.js";import"./CartesianAxis-Bbwk-dKT.js";import"./Layer-BGC4J_xD.js";import"./resolveDefaultProps-BSk6HMjY.js";import"./Text-iORmPHTw.js";import"./DOMUtils-CsRoe294.js";import"./isWellBehavedNumber-D-GNZTzD.js";import"./Label-DWRV51vs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BWby1RF4.js";import"./index-gQ6L8YEG.js";import"./index-DqSoJz4u.js";import"./types-DQZAaZ_X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D8ZDt7ph.js";import"./immer-CGkt0g8p.js";import"./RechartsWrapper-DZiKfiby.js";import"./index-DM8R45IP.js";import"./index-Q4Uh5SEe.js";import"./axisSelectors-oNKIzGeo.js";import"./CartesianChart-Czz_wvXV.js";import"./chartDataContext-hk4GvDfq.js";import"./CategoricalChart-JZ4zyfB8.js";import"./Curve-Bcq56GGu.js";import"./step-Cd6fl88T.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CK8w4tlK.js";import"./useAnimationId-FA58Q0Bf.js";import"./ActivePoints-DBXxGTLr.js";import"./Dot-Do_OPL_B.js";import"./RegisterGraphicalItemId-r44ao9oh.js";import"./ErrorBarContext-DIIvOPaT.js";import"./GraphicalItemClipPath-B9V208TL.js";import"./SetGraphicalItem-DGuU9f1e.js";import"./getRadiusAndStrokeWidthFromDot-sYFWnDzD.js";import"./ActiveShapeUtils-D8MF483E.js";import"./useElementOffset-jc0N9IvC.js";import"./uniqBy-Gl9-Tg86.js";import"./iteratee-BSz8A-ph.js";import"./Cross-CMdzAsQv.js";import"./Rectangle-BjArQHIN.js";import"./util-Dxo8gN5i.js";import"./Sector-CkZnjYxr.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
