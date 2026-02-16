import{e}from"./iframe-DvRa5dgx.js";import{X as s}from"./XAxis-B9F7R6N6.js";import{R as y}from"./arrayEqualityCheck-Bp8MITA_.js";import{C as g}from"./ComposedChart-BwcJtZel.js";import{L as x}from"./Line-CtYOVvfN.js";import{R as S}from"./RechartsHookInspector-BA8H9BQA.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-s-qGbPsD.js";import{T as O}from"./Tooltip-DSiZxK6c.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-SoldR4SX.js";import"./CartesianAxis-EG33R3Ra.js";import"./Layer-D1P67DdH.js";import"./Text-IC-RDuuN.js";import"./DOMUtils-BAfLzr3t.js";import"./Label-Btvu6YdH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DYz5TQmP.js";import"./zIndexSlice-DOVBAap6.js";import"./types-B9z2jnxG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-wIA-0A8I.js";import"./hooks-BvcgOwyj.js";import"./RechartsWrapper-BMf934kH.js";import"./CartesianChart-c-FJQtIa.js";import"./chartDataContext-C7Yjh1uz.js";import"./CategoricalChart-_E9QNV-R.js";import"./ReactUtils-CmHVY68G.js";import"./ActivePoints-BV7tIsyM.js";import"./Dot-DZhZY6Yk.js";import"./RegisterGraphicalItemId-CIANtz7R.js";import"./ErrorBarContext-RHRezGW4.js";import"./GraphicalItemClipPath-mIkxvXlB.js";import"./SetGraphicalItem-C9-rzWMm.js";import"./useAnimationId-BFi3XFtV.js";import"./getRadiusAndStrokeWidthFromDot-Djbc36Ny.js";import"./ActiveShapeUtils-CAuhGApT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNOkSbEV.js";import"./Trapezoid-BUi5_O3W.js";import"./Sector-BF6BfHlW.js";import"./Symbols-DZMMgp9J.js";import"./Curve-DLYOuSdb.js";import"./index-B2ipCF0h.js";import"./ChartSizeDimensions-CDS5iqbY.js";import"./OffsetShower-Dle6B9Mj.js";import"./PlotAreaShower-CGSCgxJv.js";import"./useElementOffset-DaJBl-QG.js";import"./iteratee-BmaGSJR8.js";import"./Cross-BoRkc8PB.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Wt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Wt as __namedExportsOrder,Lt as default};
