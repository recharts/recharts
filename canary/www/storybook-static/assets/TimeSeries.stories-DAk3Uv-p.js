import{e}from"./iframe-ChNOinEW.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-BNsMzyt5.js";import{g as y}from"./arrayEqualityCheck-ejHXznq4.js";import{C as g}from"./ComposedChart-BOdHbnI9.js";import{L as x}from"./Line-o244vEU5.js";import{R as S}from"./RechartsHookInspector-BOE9KQVD.js";import{t as T,s as A,f as C,e as M,b,g as k,h as w,i as D,c as r}from"./d3-scale-B3SHfU9r.js";import{T as V}from"./Tooltip-BcsiREkY.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-B1qSIHlZ.js";import"./Layer-C5r2D5eL.js";import"./resolveDefaultProps-CrKZ3yHb.js";import"./Text-D9d9Y4NZ.js";import"./DOMUtils-DGZ4THTA.js";import"./Label-toG1Bdw3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B8mCWzZh.js";import"./zIndexSlice-BFRT_l82.js";import"./immer-C-_4yaFF.js";import"./types-o0HcDoUt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-P1hbw2J7.js";import"./hooks-DZ4AuhfW.js";import"./axisSelectors-Wf-uHVWr.js";import"./RechartsWrapper-e8IcX7Ky.js";import"./index-DMHtEqPw.js";import"./CartesianChart-C54kEOmP.js";import"./chartDataContext-DjEoDELK.js";import"./CategoricalChart-CaEOI484.js";import"./Curve-o5S5hG9f.js";import"./step-CtDorYUy.js";import"./path-DyVhHtw_.js";import"./ReactUtils-Ck9hJUMi.js";import"./ActivePoints-DQV8XJKb.js";import"./Dot-el16A6Be.js";import"./RegisterGraphicalItemId-DDUKZo60.js";import"./ErrorBarContext-kJOKaxmw.js";import"./GraphicalItemClipPath-BEGDR4Eg.js";import"./SetGraphicalItem-DSKSTIyc.js";import"./useAnimationId-Dtq79URZ.js";import"./getRadiusAndStrokeWidthFromDot-DnG891GK.js";import"./ActiveShapeUtils-LTcw4Xsa.js";import"./index-OCCX1cWv.js";import"./ChartSizeDimensions-Cm_TkHUI.js";import"./OffsetShower-TftFluvn.js";import"./PlotAreaShower-zOTWVw7t.js";import"./useElementOffset-C8CRPBgP.js";import"./uniqBy-BvCUGEDR.js";import"./iteratee-BuSwAxym.js";import"./Cross-CaCs0rRK.js";import"./Rectangle-C57_hq_U.js";import"./Sector-DFk4enOh.js";const Yt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),K=r(":%S"),R=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?K(t):M(t)<t?R(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const _t=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,_t as __namedExportsOrder,Yt as default};
