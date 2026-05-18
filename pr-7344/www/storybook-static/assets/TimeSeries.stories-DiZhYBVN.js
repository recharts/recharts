import{e}from"./iframe-DZ8hthY-.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-miaKL81g.js";import{g as y}from"./arrayEqualityCheck-CM4xUg98.js";import{C as g}from"./ComposedChart-BBz9TwIo.js";import{L as x}from"./Line-ByZpIY1G.js";import{R as S}from"./RechartsHookInspector-UTj_zoVi.js";import{t as T,s as A,f as C,e as M,b,g as k,h as w,i as D,c as r}from"./d3-scale-DZsU5NlZ.js";import{T as V}from"./Tooltip-BzBtiibB.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CAIPbX_H.js";import"./Layer-CVDrdQdQ.js";import"./resolveDefaultProps-B_ys-f75.js";import"./Text-CCJtZgZH.js";import"./DOMUtils-DNsRktQS.js";import"./Label-NDKa2SGb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CigE4wdP.js";import"./zIndexSlice-DRYSH0d1.js";import"./immer-BecrFbrr.js";import"./types-CeA2W1WE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B11M6loL.js";import"./hooks-DoB3DHlQ.js";import"./axisSelectors-DgKTbZDy.js";import"./RechartsWrapper-BUTuEf4Y.js";import"./index-D76bsI4z.js";import"./CartesianChart-zFbedmPR.js";import"./chartDataContext-CrXAevUQ.js";import"./CategoricalChart-Bvtk9acs.js";import"./ReactUtils-BDnHjpWV.js";import"./ActivePoints-CQPlZabl.js";import"./Dot-CK1-CRkK.js";import"./RegisterGraphicalItemId-p_DkQNMI.js";import"./ErrorBarContext-A1fFW7tK.js";import"./GraphicalItemClipPath-Cgx5E8W2.js";import"./SetGraphicalItem-CO1zjpRd.js";import"./useAnimationId-EGG1FiRd.js";import"./getRadiusAndStrokeWidthFromDot-BCNCi0Sv.js";import"./ActiveShapeUtils-BnH0jvYd.js";import"./isPlainObject-DcZDH2H_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DX54_srN.js";import"./Trapezoid-DtiIjNQQ.js";import"./Sector-B0ZgMooc.js";import"./Symbols-DM3sefdE.js";import"./symbol-Dw5oaVNQ.js";import"./step-C2ZxtsDR.js";import"./Curve-BwYo_aCq.js";import"./index-DZqpEK_T.js";import"./ChartSizeDimensions-ULUEOeMz.js";import"./OffsetShower-BU-kozBz.js";import"./PlotAreaShower-BchYlFwA.js";import"./useElementOffset-CZcO71mh.js";import"./uniqBy-CITw4fEJ.js";import"./iteratee-DNBLEmsl.js";import"./Cross-Bg85ZWQq.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),K=r(":%S"),R=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?K(t):M(t)<t?R(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
