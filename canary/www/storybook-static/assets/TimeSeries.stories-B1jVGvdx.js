import{e}from"./iframe-NOjYqVDf.js";import{X as s}from"./XAxis-gQef3nNh.js";import{R as y}from"./arrayEqualityCheck-CKPvr2Sv.js";import{C as g}from"./ComposedChart-DP1DcGpI.js";import{L as x}from"./Line-1TE9oZ2s.js";import{R as S}from"./RechartsHookInspector-CZuAKH0J.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-_b35tTPj.js";import{T as O}from"./Tooltip-DIQtDjfj.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B4jksYlp.js";import"./CartesianAxis-DmPLGWaH.js";import"./Layer-C5eEc_aO.js";import"./Text-C7FUzYMA.js";import"./DOMUtils-BMDxU690.js";import"./Label-DSmhxnyp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CmnykYAa.js";import"./zIndexSlice-Doe50Ljr.js";import"./types-Cdrp97aK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CNdDn6G4.js";import"./hooks-DkToD0vA.js";import"./RechartsWrapper-CYtF97y_.js";import"./CartesianChart-DlSo8JUa.js";import"./chartDataContext-BCOGOXd9.js";import"./CategoricalChart-BxTZW61W.js";import"./ReactUtils-B9O68L3J.js";import"./ActivePoints-CQfp67or.js";import"./Dot-B8-r0lP5.js";import"./RegisterGraphicalItemId-YVRRFCp2.js";import"./ErrorBarContext-BzRoxPBz.js";import"./GraphicalItemClipPath-C6swNonr.js";import"./SetGraphicalItem-BeKk8_xu.js";import"./useAnimationId-DyWolGb_.js";import"./getRadiusAndStrokeWidthFromDot-Cr1dXyad.js";import"./ActiveShapeUtils-BNzKmu3G.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B01634cJ.js";import"./Trapezoid-BprYBPWk.js";import"./Sector-Bz2V5crH.js";import"./Symbols-CYsc0tYe.js";import"./Curve-DR3tx7PX.js";import"./index-Ioy1DO1u.js";import"./ChartSizeDimensions-CVj6kL6N.js";import"./OffsetShower-BtzaIgV3.js";import"./PlotAreaShower-BDFeD2A4.js";import"./useElementOffset-DoeCbbnP.js";import"./iteratee-Bgpf0Y4J.js";import"./Cross-DZ-7VkVV.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
