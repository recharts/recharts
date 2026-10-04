import{R as e}from"./iframe-C-Iuj2CY.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-d6u4l33E.js";import{R as h}from"./zIndexSlice-C4JSr5KN.js";import{C as g}from"./ComposedChart-nt2Gmc-a.js";import{L as x}from"./Line-Dew_1rVx.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-C4GnCzHc.js";import{T as V}from"./Tooltip-CW5xIaKg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-kD5DlR3-.js";import"./Layer-CTC_B_AO.js";import"./resolveDefaultProps-DL7WVnFH.js";import"./Text-CuFXobZ8.js";import"./DOMUtils-D1JEdLYA.js";import"./isWellBehavedNumber-Ku-m6vnz.js";import"./useId-DB-RDK5Y.js";import"./useBackwardsCompatibleTheme-CO0ZmmTO.js";import"./Label-BQbGJ4sW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ChUJUaqX.js";import"./index-BYGjDTj5.js";import"./index-CKdK4Tlm.js";import"./types-DTCaWYmj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cor1xeVL.js";import"./throttle-Bp4liTDw.js";import"./index-C4z0ADpB.js";import"./index-8RkzDuen.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-7_EuFQF-.js";import"./axisSelectors-BMEelndQ.js";import"./index-DFGRvPnn.js";import"./CartesianChart-BAWmemtm.js";import"./chartDataContext-oGc_LYLd.js";import"./CategoricalChart-CSHLIlSH.js";import"./Curve-A3JiVHPQ.js";import"./step-CDAaK65-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BJhHPNtS.js";import"./useAnimationId-Cs7J9c_D.js";import"./ActivePoints-D8XBSWMg.js";import"./Dot-BlUpubQM.js";import"./RegisterGraphicalItemId-C_gzfzaw.js";import"./ErrorBarContext-LN9zzfth.js";import"./GraphicalItemClipPath-D1JmIf9k.js";import"./SetGraphicalItem-CVWA9VpP.js";import"./getRadiusAndStrokeWidthFromDot-D9zL_eAZ.js";import"./ActiveShapeUtils-DE2-A3Sf.js";import"./useGraphicalItemIdentity-_eCurvUA.js";import"./useElementOffset-CrkLBw9h.js";import"./uniqBy-rSYIRPWX.js";import"./iteratee-DCxMM0MI.js";import"./Cross-Gn1ZSEW3.js";import"./Rectangle-DfduTvBp.js";import"./util-Dxo8gN5i.js";import"./Sector-BngMcKjs.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
