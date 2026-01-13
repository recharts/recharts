import{e}from"./iframe-CoPAm7V1.js";import{X as s}from"./XAxis-DI-YRLnX.js";import{R as y}from"./arrayEqualityCheck-b4a3wn0-.js";import{C as g}from"./ComposedChart--N9Ah0Mu.js";import{L as x}from"./Line-D0HoGufp.js";import{R as S}from"./RechartsHookInspector-CfbHdkme.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-Cdwi4Gmi.js";import{T as O}from"./Tooltip-Wtmd_kNX.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-OnP709yn.js";import"./CartesianAxis-ksOJ1Son.js";import"./Layer-BHClijQk.js";import"./Text-D8eyFLL7.js";import"./DOMUtils-B7UiVnHW.js";import"./Label-BN0l3Vc3.js";import"./PolarUtils-DGkU6n7f.js";import"./ZIndexLayer-DI7Wag2n.js";import"./zIndexSlice-CV1CLEn_.js";import"./types-BF6A7chk.js";import"./hooks-BDoK-oN_.js";import"./CategoricalChart-L_hDSvwE.js";import"./RechartsWrapper-DeO9xugK.js";import"./CartesianChart-DHc8LGBh.js";import"./chartDataContext-482lKGc9.js";import"./ReactUtils-B2MREsDE.js";import"./ActivePoints-BGzQPzt_.js";import"./Dot-Cyp9zk51.js";import"./RegisterGraphicalItemId-Cz_MWvVU.js";import"./ErrorBarContext-BY_hX5kq.js";import"./GraphicalItemClipPath-VLyW1X2z.js";import"./SetGraphicalItem-D7kJJVje.js";import"./useAnimationId-BwvCPaTs.js";import"./getRadiusAndStrokeWidthFromDot-BOOk7ozS.js";import"./ActiveShapeUtils-fJZGBnKb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CvvJIb6J.js";import"./Trapezoid-f55pqUw3.js";import"./Sector-CfHQ2k9y.js";import"./Symbols-oRqZ57VZ.js";import"./Curve-DDvcpmM9.js";import"./index-gyMa1MpJ.js";import"./ChartSizeDimensions-BPsfgCbk.js";import"./OffsetShower-CKApfiLz.js";import"./PlotAreaShower-DYf9p6xN.js";import"./useElementOffset-eWOG3-7g.js";import"./iteratee-Cq33dU1G.js";import"./Cross-71K9dkTw.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Ht as __namedExportsOrder,Lt as default};
