import{e}from"./iframe-BgwmBjfB.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BX9DZiaX.js";import{R as y}from"./arrayEqualityCheck-B1qnogVb.js";import{C as g}from"./ComposedChart-QYakg_VE.js";import{L as x}from"./Line-BukzmJmv.js";import{R as S}from"./RechartsHookInspector-OzbFILx_.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-C0r8W7gC.js";import{T as V}from"./Tooltip-Sge9soWb.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-GtFYCfV6.js";import"./Layer-sKAIqvEC.js";import"./resolveDefaultProps-qucNpk_A.js";import"./Text-D7VqnjvF.js";import"./DOMUtils-CUsjemqf.js";import"./Label-BeTMxE7h.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DX-nM8qM.js";import"./zIndexSlice-9mnJo3WO.js";import"./immer-L1QYf-NE.js";import"./types-CFdz9x_M.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-kbflTFpl.js";import"./hooks-BBhaKEpc.js";import"./axisSelectors-p-DsPcsN.js";import"./RechartsWrapper-BzFnIirW.js";import"./index-Dw-9JZxy.js";import"./CartesianChart-C8IYYlhJ.js";import"./chartDataContext-DR_cij4x.js";import"./CategoricalChart-DrEP-5RI.js";import"./ReactUtils-Dla0XjmI.js";import"./ActivePoints-DDZpcuUc.js";import"./Dot-n89jEX-l.js";import"./RegisterGraphicalItemId-CtttlxaS.js";import"./ErrorBarContext-CLlFokOM.js";import"./GraphicalItemClipPath-bS3Dkt_2.js";import"./SetGraphicalItem-CbRoDUDG.js";import"./useAnimationId-nEXiQ4wd.js";import"./getRadiusAndStrokeWidthFromDot-BAwr8WJt.js";import"./ActiveShapeUtils-Bc3Bo2kR.js";import"./isPlainObject-DCrRKxze.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-xy71HFhS.js";import"./Trapezoid-Ctq3RZiG.js";import"./Sector-B8iCNGe2.js";import"./Symbols-CqgbDjwG.js";import"./symbol-D69U7vWh.js";import"./step-BxFdL0zf.js";import"./Curve-D2S6CN-2.js";import"./index-B_0cWXev.js";import"./ChartSizeDimensions-BOdb3hAs.js";import"./OffsetShower-NinoivPu.js";import"./PlotAreaShower-BvfC-KbU.js";import"./useElementOffset-DX4-4QE5.js";import"./uniqBy-CHNs3q3W.js";import"./iteratee-DJZlIK_6.js";import"./Cross-CpLRPk6Y.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
