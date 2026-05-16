import{e}from"./iframe-DWlBD4sR.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-DqK7mhYD.js";import{g as y}from"./arrayEqualityCheck-CNEGbaey.js";import{C as g}from"./ComposedChart-BAyx4O2z.js";import{L as x}from"./Line--2TgE6AZ.js";import{R as S}from"./RechartsHookInspector-BbwGamUB.js";import{t as T,s as A,f as C,e as M,b,g as k,h as w,i as D,c as r}from"./d3-scale-M7VTsA4f.js";import{T as V}from"./Tooltip-CcFiZV60.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Mlw-1mLJ.js";import"./Layer-CBKkaEhK.js";import"./resolveDefaultProps-CNcUKtS8.js";import"./Text-DHQSj0lc.js";import"./DOMUtils-LgZ0OFlh.js";import"./Label-B7fwnDQB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CcFVuy64.js";import"./zIndexSlice-D96LA4yw.js";import"./immer-DA_Y9NxP.js";import"./types-DufW0EQG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-ClpTcocu.js";import"./hooks-OMlNr05X.js";import"./axisSelectors-CpE3e6Wf.js";import"./RechartsWrapper-qpXHOlBt.js";import"./index-CG7DpBSc.js";import"./CartesianChart-C5Nu26yg.js";import"./chartDataContext-tYXX0vXe.js";import"./CategoricalChart-DhnxgrNh.js";import"./ReactUtils-Bv-62o8T.js";import"./ActivePoints-BpXK1Sh9.js";import"./Dot-BNSrz3O7.js";import"./RegisterGraphicalItemId-D8G2PQ9m.js";import"./ErrorBarContext-PluNcskT.js";import"./GraphicalItemClipPath-fLehOmj-.js";import"./SetGraphicalItem-CmDlGunV.js";import"./useAnimationId-DeTKnBQG.js";import"./getRadiusAndStrokeWidthFromDot-Df7nX_Vd.js";import"./ActiveShapeUtils-DFxf-U2C.js";import"./isPlainObject-Cg4BwvD8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-q1bxg6yb.js";import"./Trapezoid-DYkluK8E.js";import"./Sector-DrZ87OSF.js";import"./Symbols-DVgdh6wF.js";import"./symbol-CoAVQGVr.js";import"./step-DBWpQbX9.js";import"./Curve-DtQybK0o.js";import"./index-DfML4_6p.js";import"./ChartSizeDimensions-hqEEbS1-.js";import"./OffsetShower-DyOzfQGn.js";import"./PlotAreaShower-9P4lyNiw.js";import"./useElementOffset-DxOkvigD.js";import"./uniqBy-ClnHDv_J.js";import"./iteratee-cMSv06Nq.js";import"./Cross-ePpt7APx.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),K=r(":%S"),R=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?K(t):M(t)<t?R(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
