import{e}from"./iframe-C6Uu7pTN.js";import{X as s}from"./XAxis-DYlJSFAX.js";import{R as y}from"./arrayEqualityCheck-CwnCehta.js";import{C as g}from"./ComposedChart-ChY5wym6.js";import{L as x}from"./Line-DBBe-eb5.js";import{R as S}from"./RechartsHookInspector-DK8LEn3K.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-jTFhmIQC.js";import{T as V}from"./Tooltip-DF6diYM2.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CSfXt17s.js";import"./Layer-lr_Myov5.js";import"./resolveDefaultProps-BFs3c8XE.js";import"./Text-D3aSBSTN.js";import"./DOMUtils-C3fhmnrv.js";import"./Label-BWxvsGM2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BGg3LDJH.js";import"./zIndexSlice-TqQJPXuj.js";import"./immer-BQbVNYZa.js";import"./types-LVTyj2cP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BbR9AX3S.js";import"./hooks-CPOFWC30.js";import"./axisSelectors-CvaRXDpT.js";import"./RechartsWrapper-CGLJriAG.js";import"./index-86WMnZat.js";import"./CartesianChart-Df2fxLuG.js";import"./chartDataContext-78iSRkXw.js";import"./CategoricalChart-DiJF7AWc.js";import"./ReactUtils-De_gzh57.js";import"./ActivePoints-B8JphRK3.js";import"./Dot-Dz4sxWoj.js";import"./RegisterGraphicalItemId-DjVfXSwO.js";import"./ErrorBarContext-_q0KzTsJ.js";import"./GraphicalItemClipPath-enSk32wK.js";import"./SetGraphicalItem-BpIjVc9U.js";import"./useAnimationId-B1cyGcAu.js";import"./getRadiusAndStrokeWidthFromDot-fX_t_PhE.js";import"./ActiveShapeUtils-H4GnlVn4.js";import"./isPlainObject-BW25J73Y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DgIvpV-o.js";import"./Trapezoid-Cqle6yIN.js";import"./Sector-pDHcay4d.js";import"./Symbols-CHqyFdvp.js";import"./symbol-B6JyGFlS.js";import"./step-DybRLWtN.js";import"./Curve-D9DtbUHf.js";import"./index-Bw3U1Qlv.js";import"./ChartSizeDimensions-Bo_lxHZc.js";import"./OffsetShower-CHRjZmG4.js";import"./PlotAreaShower-BfZVYUAY.js";import"./useElementOffset-C2BJLsNb.js";import"./uniqBy-DSCX3tJa.js";import"./iteratee-DONz88Kj.js";import"./Cross-BMtQbamh.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
