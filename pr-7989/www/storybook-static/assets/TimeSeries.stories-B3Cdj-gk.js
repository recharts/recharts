import{R as e}from"./iframe-VT8pQoe7.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-D4USI7eu.js";import{R as h}from"./zIndexSlice-DEK4NARd.js";import{C as g}from"./ComposedChart-DEL7m4Nl.js";import{L as x}from"./Line-CP0v65zu.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CNl0eHX-.js";import{T as V}from"./Tooltip-SL3hW6tH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-32TBg9e_.js";import"./Layer-C1VwbLrz.js";import"./resolveDefaultProps-aXzZoAdw.js";import"./Text-5GPWLOFl.js";import"./pageBackground-biSlCu9n.js";import"./isWellBehavedNumber-CWd9TGG5.js";import"./useId-CUgdtS7Q.js";import"./useBackwardsCompatibleTheme-BVkaGEGO.js";import"./Label-CntNwugN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BK4Sn8Ml.js";import"./index-dScKVoLs.js";import"./index-CiAsw9yg.js";import"./types-7pH1IAPS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BV0dqoNF.js";import"./throttle-DAkHgZkc.js";import"./index-DaTNpRtK.js";import"./index-B3obxpbN.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-rzVbGAjY.js";import"./RechartsWrapper-C5t5FA9b.js";import"./index-BZU6X58j.js";import"./CartesianChart-D86ig2Qu.js";import"./chartDataContext-C-2DcCuQ.js";import"./CategoricalChart-xbuH4iHs.js";import"./Curve-BDSThsVb.js";import"./step-BpcsguCq.js";import"./path-DyVhHtw_.js";import"./activeStyles-XDL1Xm2T.js";import"./useAnimationId-D_S6bHPT.js";import"./dataEntryStyles-D0zUo3h2.js";import"./ActivePoints-DbYtZgI1.js";import"./Dot-LKfGzrCm.js";import"./ErrorBarContext-BYw6WEd3.js";import"./GraphicalItemClipPath-TTQOfMqQ.js";import"./SetGraphicalItem-B3Fmseum.js";import"./getRadiusAndStrokeWidthFromDot-B6XdCt_x.js";import"./ActiveShapeUtils-C3QPXajl.js";import"./useEffectiveDataKey-DiTGjvML.js";import"./useElementOffset-Bmh88r8k.js";import"./uniqBy-D3UAOLvb.js";import"./iteratee-CECdn73k.js";import"./Cross-D6BTP9MZ.js";import"./Rectangle-DpCZdUxE.js";import"./util-Dxo8gN5i.js";import"./Sector-BeRkhjap.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
