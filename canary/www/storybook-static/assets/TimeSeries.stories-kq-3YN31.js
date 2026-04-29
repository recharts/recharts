import{e}from"./iframe-CELk_iHp.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Dkm5sOcL.js";import{R as y}from"./arrayEqualityCheck-Jv-_2dlt.js";import{C as g}from"./ComposedChart-DXLKPhmj.js";import{L as x}from"./Line-BgJkyWDy.js";import{R as S}from"./RechartsHookInspector-zC8sO4Uu.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-CkPD6mk7.js";import{T as V}from"./Tooltip-EqoHihNy.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Bdrxnh8Y.js";import"./Layer--Pc4EXaW.js";import"./resolveDefaultProps-DGpqOJqH.js";import"./Text-Bw3NjmwC.js";import"./DOMUtils-D-Am5_eq.js";import"./Label-Bd9YpboY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CCDRMMaH.js";import"./zIndexSlice-BKa9iYJo.js";import"./immer-CNryykoH.js";import"./types-CyX-tNTq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-fDAVE1e2.js";import"./hooks-nYvhXGgN.js";import"./axisSelectors-B_B8N_DF.js";import"./RechartsWrapper-iaOd2vsR.js";import"./index-C7-Jna_X.js";import"./CartesianChart-D2sMjbuw.js";import"./chartDataContext-BGxyOe8E.js";import"./CategoricalChart-oFZY99PF.js";import"./ReactUtils-Dj0EWLrR.js";import"./ActivePoints-DO7snJgn.js";import"./Dot-dGAlOqLg.js";import"./RegisterGraphicalItemId-DNcpshuw.js";import"./ErrorBarContext-DacGNm7D.js";import"./GraphicalItemClipPath-CX61POx4.js";import"./SetGraphicalItem-HEs6iBS3.js";import"./useAnimationId-1GRLd7ca.js";import"./getRadiusAndStrokeWidthFromDot-wRVRq9dq.js";import"./ActiveShapeUtils-B3MGtfHB.js";import"./isPlainObject-BehFM2KM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CE1dlDuT.js";import"./Trapezoid-Dfk3zDGx.js";import"./Sector-DOGbklsh.js";import"./Symbols-Dx2mis7o.js";import"./symbol-DhXBBxwA.js";import"./step-BZd9qX-S.js";import"./Curve-D55eTV1c.js";import"./index-CuVYK_Ov.js";import"./ChartSizeDimensions-M-hHKi9p.js";import"./OffsetShower-ePPaic-x.js";import"./PlotAreaShower-D-7S5_Wy.js";import"./useElementOffset-D4fadBoO.js";import"./uniqBy-BjyCkiBk.js";import"./iteratee-CUDLRjQ1.js";import"./Cross-DkjIdaRm.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
