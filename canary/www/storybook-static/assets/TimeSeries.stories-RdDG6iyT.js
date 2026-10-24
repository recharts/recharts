import{R as e}from"./iframe-CUSfJVGy.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-93B4Nx5D.js";import{R as h}from"./zIndexSlice-DHvlitAO.js";import{C as g}from"./ComposedChart-hQ25gI1G.js";import{L as x}from"./Line-BkUDmjMa.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B5gueGek.js";import{T as V}from"./Tooltip-CNt3xiQz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DdmQm0Mb.js";import"./Layer-D3Rs15Eb.js";import"./resolveDefaultProps-eB2rdyhX.js";import"./Text-D1HNj6gm.js";import"./pageBackground-Cedpup01.js";import"./isWellBehavedNumber-BlhXGToZ.js";import"./useId-KB6j76rh.js";import"./useBackwardsCompatibleTheme-C4dzzNKp.js";import"./Label-CA5pDLh0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DS-kTeIC.js";import"./index-DM8acuEY.js";import"./index-BjrjF_sl.js";import"./dataEntryStyles-DaqIqY42.js";import"./types-CPjFjIqL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DTIkQgMV.js";import"./throttle-Dw_3NXl9.js";import"./index-cWSuCV9A.js";import"./index-aMAZnXxU.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-Ba-uagI8.js";import"./RechartsWrapper-DAlfJkzI.js";import"./index-BHb_Ppqj.js";import"./CartesianChart-CYmwXWF8.js";import"./chartDataContext-C8S7uA6r.js";import"./CategoricalChart-CCLAUHt0.js";import"./Curve-CVDIysdN.js";import"./step-DHG-DUf8.js";import"./path-DyVhHtw_.js";import"./activeStyles-D0GvvJcq.js";import"./useAnimationId-5nMvsn6t.js";import"./ActivePoints-DGPkFg2Z.js";import"./Dot-CuTOnkdw.js";import"./RegisterGraphicalItemId-Brr1oXEa.js";import"./ErrorBarContext-B4ne9aHr.js";import"./SetGraphicalItem-C-ccX4yH.js";import"./getRadiusAndStrokeWidthFromDot-D3hEZZtv.js";import"./ActiveShapeUtils-JeO-QszI.js";import"./useEffectiveDataKey-CoJRTSM6.js";import"./useElementOffset-DG-NqV_R.js";import"./uniqBy-_sTXg2vc.js";import"./iteratee-BWlFYs6V.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BlnG8QnV.js";import"./Rectangle-vSbPEONY.js";import"./util-Dxo8gN5i.js";import"./Sector-C18YqcZp.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
