import{e}from"./iframe-CBxZ3YEm.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C1aLPlbC.js";import{R as y}from"./arrayEqualityCheck-Blj5Aeqs.js";import{C as g}from"./ComposedChart-CTVnh_SC.js";import{L as x}from"./Line-CYF4OlQp.js";import{R as S}from"./RechartsHookInspector-CqBmfRxm.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-BQHKXGzh.js";import{T as V}from"./Tooltip-BAkws9JH.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DW4xU2v8.js";import"./Layer-8oMMti5m.js";import"./resolveDefaultProps-BEDeUj8t.js";import"./Text-7hG94G_y.js";import"./DOMUtils-v8LS_cLE.js";import"./Label-C9wjKN1h.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B7fniKOv.js";import"./zIndexSlice-De9OMF5H.js";import"./immer-CcXWnMnm.js";import"./types-CzApK6LP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-f_j9Tm_g.js";import"./hooks-DYoyM5tD.js";import"./axisSelectors-CzPcR0bZ.js";import"./RechartsWrapper-gLcbW_Rw.js";import"./index-HycHHMGp.js";import"./CartesianChart-BE_qH18M.js";import"./chartDataContext-DvlevAqI.js";import"./CategoricalChart-Bg-fk5CT.js";import"./ReactUtils-c7YX91Ex.js";import"./ActivePoints-Cg_WMXc2.js";import"./Dot-xzbDIn8F.js";import"./RegisterGraphicalItemId-lPm6fXRN.js";import"./ErrorBarContext-C-jVrcMZ.js";import"./GraphicalItemClipPath-DGUbYWDL.js";import"./SetGraphicalItem-8ezKiNwU.js";import"./useAnimationId-Dgk97qlj.js";import"./getRadiusAndStrokeWidthFromDot-DelOuwrQ.js";import"./ActiveShapeUtils-D6xdRanx.js";import"./isPlainObject-SwII21m1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BWauEswa.js";import"./Trapezoid-BfLDWvDz.js";import"./Sector-E_Gangzj.js";import"./Symbols-CfjjfEBZ.js";import"./symbol-CgH1RbEA.js";import"./step-i7QSy-8Q.js";import"./Curve-CyXQFnOW.js";import"./index-FhOfqCjV.js";import"./ChartSizeDimensions-D6Chm1KW.js";import"./OffsetShower-Cf5FndXJ.js";import"./PlotAreaShower-Bk6tssdT.js";import"./useElementOffset-B8QE7ut7.js";import"./uniqBy-m8l7wXKu.js";import"./iteratee-DO27y1ZT.js";import"./Cross-CkXXW4RF.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
