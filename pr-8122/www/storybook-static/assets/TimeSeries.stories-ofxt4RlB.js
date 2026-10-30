import{R as e}from"./iframe-GbU_LfIz.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BQz4ccrC.js";import{R as h}from"./zIndexSlice-B-uY-xMG.js";import{C as g}from"./ComposedChart-B3bI5XzW.js";import{L as x}from"./Line-Cz7gfFzY.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-m-_CTi_p.js";import{T as V}from"./Tooltip-DycFhCat.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DWEGImEY.js";import"./Layer-DZ-BC5fp.js";import"./resolveDefaultProps-DaFP4Osr.js";import"./Text-CcmXBTPp.js";import"./DOMUtils-pcjvu5Mx.js";import"./ZIndexLayer-jPVQwjvI.js";import"./index-DYswmNhd.js";import"./index-CWvB4q6F.js";import"./Label-BKofA95f.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CUkA6wv5.js";import"./throttle-lL1L3VRP.js";import"./types-D5h1KHjm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D3e3FCUI.js";import"./index-Dg1dPLnL.js";import"./index-DZowzVKz.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-plpcnepy.js";import"./RechartsWrapper-CBlrkAx1.js";import"./index-C9cCXc93.js";import"./CartesianChart-6Jqeuu6_.js";import"./ZIndexPortal-CkMateYW.js";import"./CategoricalChart-C2S0aau2.js";import"./Curve-BXWlStzO.js";import"./step-B7eAtOky.js";import"./path-DyVhHtw_.js";import"./LabelList-BpWQDUee.js";import"./ActivePoints-CJ_A0ZwJ.js";import"./Dot-BZZrGYAN.js";import"./activeStyles-7gml8bSR.js";import"./useAnimationId-3m5wK_ws.js";import"./dataEntryStyles-C8Sz1tul.js";import"./Symbols-RIc_sULF.js";import"./symbol-B34bQZE8.js";import"./ErrorBarContext-pjK3YX1O.js";import"./SetGraphicalItem-SS1PjTU8.js";import"./getRadiusAndStrokeWidthFromDot-DZIWxG1k.js";import"./ActiveShapeUtils-t8cc3cab.js";import"./useEffectiveDataKey-DF49AIat.js";import"./useElementOffset-CMK7cZDC.js";import"./uniqBy-Db9I9r6H.js";import"./iteratee-DgfWwApm.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DDh9Rsms.js";import"./Rectangle-CJMi75hX.js";import"./util-Dxo8gN5i.js";import"./Sector-CW1nojyV.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
