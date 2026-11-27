import{R as e}from"./iframe-D4kLWznI.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CIt9BLfr.js";import{R as h}from"./zIndexSlice-B28gm5Zj.js";import{C as g}from"./ComposedChart-D5eWF65_.js";import{L as x}from"./Line-MmZxVnyG.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./diverging-COuExidI.js";import{T as V}from"./Tooltip-DTjQB8kY.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CJYKgT8A.js";import"./get-CjriyByo.js";import"./CartesianAxis-BbZQB26a.js";import"./Layer-BiQ6tIpf.js";import"./Text-NG93JaM3.js";import"./ZIndexLayer-DTTyUNkX.js";import"./index-K9fqWjcX.js";import"./index-BZ6MCrYJ.js";import"./Label-CC2QlraV.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Jvx5Hvrj.js";import"./throttle-q19G1wYU.js";import"./types-C0VOENzr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BRzk6Zuy.js";import"./index-BukBKnfG.js";import"./index-BSDf5RkV.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-ByHGSv-T.js";import"./RechartsWrapper-Brhd5wtn.js";import"./index-Cxoy9Bx4.js";import"./fillDefinitions-uAqib7o2.js";import"./CartesianChart-CYGJ7Vi6.js";import"./chartDataContext-ExwO8N-9.js";import"./CategoricalChart-lvaD8ywk.js";import"./getRadiusAndStrokeWidthFromDot-CZtOf2sh.js";import"./Curve-BIpyAZSM.js";import"./step-BWfRSULP.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CQy-JarL.js";import"./ActivePoints-CZBrkmRZ.js";import"./Dot-We9lW2eK.js";import"./activeStyles-B6xOxwnr.js";import"./useAnimationId-Cda-LmXY.js";import"./Symbols-C71JHuMc.js";import"./symbol-q_YI2BlA.js";import"./ErrorBarContext-D-e_coEF.js";import"./SetGraphicalItem-BpVaXpzF.js";import"./ActiveShapeUtils-CmC5_l1r.js";import"./useEffectiveDataKey-KQzX-PyK.js";import"./useElementOffset-CuWdjgeb.js";import"./uniqBy-B6TwiwOy.js";import"./iteratee-DSdbCzg-.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C0ROwwiQ.js";import"./Rectangle-BzREhQg7.js";import"./util-Dxo8gN5i.js";import"./Sector-CScXPvLM.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
