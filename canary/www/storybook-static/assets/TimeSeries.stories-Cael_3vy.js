import{R as e}from"./iframe-DnfWaB1B.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CRu44DAQ.js";import{R as h}from"./zIndexSlice-BT6q8CVb.js";import{C as g}from"./ComposedChart-BozjqNdW.js";import{L as x}from"./Line-S15yyNv0.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Br-96nR7.js";import{T as V}from"./Tooltip-PYa1pAVz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CiEPj5kn.js";import"./Layer-CESakEtd.js";import"./resolveDefaultProps-8EGHXmvb.js";import"./Text-18vmCMJW.js";import"./pageBackground-BZcgsdhX.js";import"./isWellBehavedNumber-B2TPiKzz.js";import"./useId-EMQHPSSh.js";import"./useBackwardsCompatibleTheme-Csjmt-9c.js";import"./Label-DErBiWtx.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CVLoryN8.js";import"./index-CMtaCruM.js";import"./index-B-M-aHgw.js";import"./types-vzKdATLY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Diudvbk0.js";import"./throttle-BlHdMJGb.js";import"./index-CNOFauDT.js";import"./index-DwRvwf7P.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BzBwCDwa.js";import"./RechartsWrapper-C0Y2iFV1.js";import"./index-BcjfqUW0.js";import"./CartesianChart-C9GO6rC8.js";import"./chartDataContext-C2BaT0xy.js";import"./CategoricalChart-m_cFhWGU.js";import"./Curve-g0mln-5B.js";import"./step-CKvXTTBh.js";import"./path-DyVhHtw_.js";import"./activeStyles-yEksTLCx.js";import"./useAnimationId-CAjA_jBW.js";import"./dataEntryStyles-7Y85MSUL.js";import"./ActivePoints-CILYAqb7.js";import"./Dot-_SxShMFA.js";import"./ErrorBarContext-D9Sd4BvK.js";import"./GraphicalItemClipPath-CEAKjsCJ.js";import"./SetGraphicalItem-Me2AFJoT.js";import"./getRadiusAndStrokeWidthFromDot-D2lPL6Sa.js";import"./ActiveShapeUtils-DcV5jonr.js";import"./useEffectiveDataKey-Dum6ZVs0.js";import"./useElementOffset-1uwHjJUJ.js";import"./uniqBy-YhWipnCo.js";import"./iteratee-_cPrzxJT.js";import"./isArguments-yB-y1yaH.js";import"./Cross-W5wFmbtm.js";import"./Rectangle-CCL9Y1KA.js";import"./util-Dxo8gN5i.js";import"./Sector-1tCIsPK_.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
