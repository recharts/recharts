import{R as e}from"./iframe-CFREJgKh.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C8rslJeD.js";import{R as h}from"./zIndexSlice-BlChPiJc.js";import{C as g}from"./ComposedChart-BHYrkphp.js";import{L as x}from"./Line-RQeT_xTt.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CSfabLms.js";import{T as V}from"./Tooltip-CupqeGY6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DYae0Cq3.js";import"./Layer-C0qOZ959.js";import"./resolveDefaultProps-D2NJN12P.js";import"./Text-CdYm4waL.js";import"./pageBackground-BhcEVreL.js";import"./ZIndexLayer-C1WGeCae.js";import"./index-BnRinVhV.js";import"./index-9ppQqeZ5.js";import"./Label-CqB5IeGz.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-U9vqJLN4.js";import"./throttle-D0fuDWYv.js";import"./types-DVbjgkU5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BlPhjOzM.js";import"./index-DNbnfthz.js";import"./index-CXWxUzol.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BWBf8JbO.js";import"./RechartsWrapper-i5dbrXIz.js";import"./index-BMrIm2ob.js";import"./CartesianChart-DKqxdz5e.js";import"./ZIndexPortal-CxkIiCll.js";import"./CategoricalChart-wyRiJqKi.js";import"./Curve-CftG2h3G.js";import"./step-BcalNNwl.js";import"./path-DyVhHtw_.js";import"./LabelList-D_a5qFT1.js";import"./ActivePoints-C0jpDbhM.js";import"./Dot-CbZEK9HK.js";import"./activeStyles-DZOohqxv.js";import"./useAnimationId-D_reCqg_.js";import"./dataEntryStyles-D-tUw7To.js";import"./Symbols-C448CvWL.js";import"./symbol-nJMR8kbN.js";import"./ErrorBarContext-Ckc5teto.js";import"./SetGraphicalItem-DdrEYt3d.js";import"./getRadiusAndStrokeWidthFromDot-C8BFWNtM.js";import"./ActiveShapeUtils-D0KAMjVA.js";import"./useEffectiveDataKey-D5PSAWPt.js";import"./useElementOffset-D9x3IcJV.js";import"./uniqBy-DeAafqXU.js";import"./iteratee-iRN6k7X2.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DBVgOnwX.js";import"./Rectangle-BcQT3jTk.js";import"./util-Dxo8gN5i.js";import"./Sector-g9nIfeJI.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
