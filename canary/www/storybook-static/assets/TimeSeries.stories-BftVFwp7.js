import{e}from"./iframe-D-0IUJGK.js";import{X as s}from"./XAxis-CVV4DzFI.js";import{R as y}from"./arrayEqualityCheck-C2_-Uu4b.js";import{C as g}from"./ComposedChart-COT4sTDA.js";import{L as x}from"./Line-CSAZjpQX.js";import{R as S}from"./RechartsHookInspector-ByAlRvo4.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-bTazPGJf.js";import{T as V}from"./Tooltip-B7n3uHFG.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BpaKC44j.js";import"./Layer-CTviFarP.js";import"./resolveDefaultProps-6ZRnbExh.js";import"./Text-7HuLOFJ_.js";import"./DOMUtils-CyqmOfaO.js";import"./Label-CQuheRKb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-dNEhzNo8.js";import"./zIndexSlice-DSGfPW9M.js";import"./immer-BqKqj1gc.js";import"./types-D1PFdIYW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CBi406A9.js";import"./hooks-DdYzpI7S.js";import"./axisSelectors-I9kb0cKY.js";import"./RechartsWrapper-CufL0AhU.js";import"./index-BKZ6_UMT.js";import"./CartesianChart-D1C4weRi.js";import"./chartDataContext-CpBPNMx6.js";import"./CategoricalChart-Cvik2JIp.js";import"./ReactUtils-DhoIBDOK.js";import"./ActivePoints-D-j70f6P.js";import"./Dot-9wQhAS5v.js";import"./RegisterGraphicalItemId-BG4vqgbk.js";import"./ErrorBarContext-CnqimuFK.js";import"./GraphicalItemClipPath-6R7g6XV3.js";import"./SetGraphicalItem-WLE6T4Wd.js";import"./useAnimationId-C9TFjIVY.js";import"./getRadiusAndStrokeWidthFromDot-CyGkBVNU.js";import"./ActiveShapeUtils-BDOyHxHs.js";import"./isPlainObject-BJcM5Fjp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-xceTB-v2.js";import"./Trapezoid-D-5x7DqH.js";import"./Sector-SAKjVkNh.js";import"./Symbols-CM5rDsvy.js";import"./symbol-DIeWOW3k.js";import"./step-DIrgAirM.js";import"./Curve-CUbaL9A5.js";import"./index-CvEiFoUh.js";import"./ChartSizeDimensions-BThuhk--.js";import"./OffsetShower-DnIfcGdO.js";import"./PlotAreaShower-BUKTEC4c.js";import"./useElementOffset-RR8V5txV.js";import"./uniqBy-Dt7HNo1A.js";import"./iteratee-D2mYQU3A.js";import"./Cross-KyvP-mXM.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const zt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
