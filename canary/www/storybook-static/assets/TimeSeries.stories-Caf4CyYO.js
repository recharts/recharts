import{e}from"./iframe-CGwC73OO.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-KheqwHPS.js";import{R as y}from"./arrayEqualityCheck-BlziNjUk.js";import{C as g}from"./ComposedChart-8-UPKNFd.js";import{L as x}from"./Line-B0ozFG-e.js";import{R as S}from"./RechartsHookInspector-BOLymao4.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-BH0-xThR.js";import{T as V}from"./Tooltip-87RqnmLF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Bw03X_Zl.js";import"./Layer-BBc4ESPC.js";import"./resolveDefaultProps-2h9cia6B.js";import"./Text-DyJrB0G7.js";import"./DOMUtils-C1ZRgIwE.js";import"./Label-CE6Oihdn.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CAqiJgLq.js";import"./zIndexSlice-Pvig-liy.js";import"./immer-CURee86N.js";import"./types-C_6Vkwi_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DBon5NFb.js";import"./hooks-C-sNjqxb.js";import"./axisSelectors-ClgkNKcu.js";import"./RechartsWrapper-DMSzhStw.js";import"./index-CByG6IuO.js";import"./CartesianChart-ChaOc86m.js";import"./chartDataContext-CmWRMrC9.js";import"./CategoricalChart-DtqXk2xy.js";import"./ReactUtils-CYVZdurj.js";import"./ActivePoints-BTOrd9Zd.js";import"./Dot-By1SCY7k.js";import"./RegisterGraphicalItemId-yX1pqnM-.js";import"./ErrorBarContext-a8CrbqxK.js";import"./GraphicalItemClipPath-CuaCHgKU.js";import"./SetGraphicalItem-CRoX03qV.js";import"./useAnimationId-B3H-bs7p.js";import"./getRadiusAndStrokeWidthFromDot--GB1IBDa.js";import"./ActiveShapeUtils-BoZw7F6l.js";import"./isPlainObject-CMDmT6Oo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Qmwzuu0_.js";import"./Trapezoid-3CdzbHVF.js";import"./Sector-C4mEqCcR.js";import"./Symbols-DVb7nCyx.js";import"./symbol-zQKMiMKl.js";import"./step-zq2neHnY.js";import"./Curve-C4VRfueh.js";import"./index-CF2MM-Q8.js";import"./ChartSizeDimensions-BPnl0leJ.js";import"./OffsetShower-BHX9YNtn.js";import"./PlotAreaShower-CFsnprFU.js";import"./useElementOffset-DjtirxfO.js";import"./uniqBy-CKpTCRET.js";import"./iteratee-B30x_xh4.js";import"./Cross-DZTW7vLE.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
