import{e}from"./iframe-Dbih6tM_.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-UKVsyr7-.js";import{g as y}from"./zIndexSlice-F7HsGAhb.js";import{C as g}from"./ComposedChart-hkcoJXW_.js";import{L as x}from"./Line-DKLERS8c.js";import{t as T,s as A,f as C,e as E,b as M,g as b,h as w,i as D,c as r}from"./d3-scale-QFZ3DYXF.js";import{T as V}from"./Tooltip-91lkN_Ou.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DVIR8H8G.js";import"./CartesianAxis-sMFUgupR.js";import"./Layer-B42S8g5T.js";import"./resolveDefaultProps-C6XhIduD.js";import"./Text-BD0wWctz.js";import"./DOMUtils-DtcMNyN4.js";import"./isWellBehavedNumber-C76PNx6x.js";import"./Label-CzYO866A.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DaMCCGdS.js";import"./index-C3fYT42t.js";import"./index-VrctuRm7.js";import"./types-Bhc7gOzP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CY1pIMUb.js";import"./immer-u9L_0Kl5.js";import"./RechartsWrapper-CzkBSRjy.js";import"./index-yjWx6Bgh.js";import"./axisSelectors-DGtb_paL.js";import"./CartesianChart-sZ1KYKyT.js";import"./chartDataContext-CumcEPMe.js";import"./CategoricalChart-BUbHs2Eq.js";import"./Curve-CbpaSJeH.js";import"./step-EAtlMAAS.js";import"./path-DyVhHtw_.js";import"./ReactUtils-Bj9mmMxB.js";import"./ActivePoints-DzbjRTsh.js";import"./Dot-BKoIVpn9.js";import"./RegisterGraphicalItemId-CoMv7TZ7.js";import"./ErrorBarContext-CaITZn-H.js";import"./GraphicalItemClipPath-BqpiOJ0K.js";import"./SetGraphicalItem-C_rRFyeV.js";import"./useAnimationId-CWLhhp_H.js";import"./getRadiusAndStrokeWidthFromDot-DA8FMUL1.js";import"./ActiveShapeUtils-B7EaMEP1.js";import"./useElementOffset-BXd0grxf.js";import"./uniqBy-ByRFrmC2.js";import"./iteratee-DEDrKpvz.js";import"./Cross-BehVYR4O.js";import"./Rectangle-DeVdQqm5.js";import"./Sector-C4ZURWaA.js";const Xt={component:s},S={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),W=r("%b %d"),X=r("%B"),B=r("%Y");function R(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?F(t):b(t)<t?w(t)<t?L(t):W(t):D(t)<t?X(t):B(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:R};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Bt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Bt as __namedExportsOrder,Xt as default};
