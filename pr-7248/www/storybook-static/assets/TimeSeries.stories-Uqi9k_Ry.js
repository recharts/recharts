import{e}from"./iframe-CLmjlzb1.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BfN6o_IU.js";import{R as y}from"./arrayEqualityCheck-B4wm4mzq.js";import{C as g}from"./ComposedChart-NZAgTk7u.js";import{L as x}from"./Line-DGTUW3Zm.js";import{R as S}from"./RechartsHookInspector-BixZoynz.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-Cfbd6Yba.js";import{T as V}from"./Tooltip-Bzwo1YGM.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-4_WgxG81.js";import"./Layer-B8Y-IGwU.js";import"./resolveDefaultProps-DfSSEgX9.js";import"./Text-yZ4aTas7.js";import"./DOMUtils-BTzSUo1_.js";import"./Label-5j72dgYu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B_c6eilm.js";import"./zIndexSlice-ENrbLBpP.js";import"./immer-BRhk69FB.js";import"./types-CPZMLz1x.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-7exySQiY.js";import"./hooks-d-SQKimb.js";import"./axisSelectors-BSjiqA5G.js";import"./RechartsWrapper-Cuidzjs6.js";import"./index-Du-W5DOH.js";import"./CartesianChart-BmEkTPS6.js";import"./chartDataContext-8FmNdAi4.js";import"./CategoricalChart-Cd_MTwuC.js";import"./ReactUtils-D_M8UzUW.js";import"./ActivePoints-CJhScI-d.js";import"./Dot-CmmvI3p6.js";import"./RegisterGraphicalItemId-C1ifoo0F.js";import"./ErrorBarContext-CwN8tpsm.js";import"./GraphicalItemClipPath-DB5whV9z.js";import"./SetGraphicalItem-BreTABoz.js";import"./useAnimationId-DS-J4iW4.js";import"./getRadiusAndStrokeWidthFromDot-Dkw_fQYH.js";import"./ActiveShapeUtils-D95D5Icg.js";import"./isPlainObject-VurimMcN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CG_TffJC.js";import"./Trapezoid-Cu-zNPNg.js";import"./Sector-kWP0DhnI.js";import"./Symbols-CXcyzyAh.js";import"./symbol-CD9uivpb.js";import"./step-B08msyNS.js";import"./Curve-C2JnH5yk.js";import"./index-D8lwKlWX.js";import"./ChartSizeDimensions-DPxIvg36.js";import"./OffsetShower-J2qKkSVX.js";import"./PlotAreaShower-BflxX8Fl.js";import"./useElementOffset-DdZfO3gs.js";import"./uniqBy-C8pbwaZO.js";import"./iteratee-MARHZxta.js";import"./Cross-BuY4bUHr.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
