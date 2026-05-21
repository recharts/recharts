import{e}from"./iframe-D2xkh5VA.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-8irwFxlw.js";import{g as y}from"./arrayEqualityCheck-BcvopYI_.js";import{C as g}from"./ComposedChart-oF9YiWjC.js";import{L as x}from"./Line-C-3S5d4g.js";import{R as S}from"./RechartsHookInspector-BNLXTPTn.js";import{t as T,s as A,f as C,e as M,b,g as k,h as w,i as D,c as r}from"./d3-scale-CrDd0VeH.js";import{T as V}from"./Tooltip-CxO3WPGy.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DAZlFlgD.js";import"./Layer-DhOsa-t6.js";import"./resolveDefaultProps-ba1qBB1K.js";import"./Text-hIOc-MSS.js";import"./DOMUtils-BkYWFWy3.js";import"./Label-DeRbtMqy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C7En4AyY.js";import"./zIndexSlice-BbkJeUOK.js";import"./immer-CX6PUSO2.js";import"./types-CxiHHYTB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C-KOSoJD.js";import"./hooks-BYxDncjb.js";import"./axisSelectors-7PXIpU8J.js";import"./RechartsWrapper-DAWcFgQP.js";import"./index-DQcqmY6q.js";import"./CartesianChart-BJzueQ6r.js";import"./chartDataContext-DR1VP15t.js";import"./CategoricalChart-BDCy0ysN.js";import"./Curve-DLNzalYA.js";import"./step-C9rAKZ37.js";import"./path-DyVhHtw_.js";import"./ReactUtils-Bwb7QYmO.js";import"./ActivePoints-BGHqbzdd.js";import"./Dot-I5Kzo50C.js";import"./RegisterGraphicalItemId-D_8matpL.js";import"./ErrorBarContext-CJXaSsld.js";import"./GraphicalItemClipPath-DFyECcqW.js";import"./SetGraphicalItem-DpgyXd2u.js";import"./useAnimationId-DiNRYHAi.js";import"./getRadiusAndStrokeWidthFromDot-BhBat3wy.js";import"./ActiveShapeUtils-B5QqFS4A.js";import"./isPlainObject-BMKBAZsK.js";import"./isPlainObject-BSutPv-K.js";import"./index-bibejZah.js";import"./ChartSizeDimensions-1DNJC0TT.js";import"./OffsetShower-CUjzMbk1.js";import"./PlotAreaShower-BjwPr_87.js";import"./useElementOffset-u2Po3lHw.js";import"./uniqBy-d6dLjjah.js";import"./iteratee-BoPPzPCm.js";import"./Cross-CpcJZtuo.js";import"./Rectangle-BFymuHuj.js";import"./Sector-CbaEqXZ4.js";const qt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),K=r(":%S"),R=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?K(t):M(t)<t?R(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Pt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
