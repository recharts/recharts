import{R as e}from"./iframe-CDv_hnlf.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Cn9K5n4J.js";import{R as h}from"./zIndexSlice-8EbRQ5DZ.js";import{C as g}from"./ComposedChart-I6fWeSu7.js";import{L as x}from"./Line-PKJWXDbr.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-8ktJJOVD.js";import{T as V}from"./Tooltip-CrE7Z-T6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Cub9Ba5o.js";import"./Layer-DzpNGvR7.js";import"./resolveDefaultProps-CImqyn8n.js";import"./Text-g_z1pfXY.js";import"./DOMUtils-FVC4l968.js";import"./isWellBehavedNumber-ipIh2BqD.js";import"./useId-M-A2L6Xg.js";import"./useBackwardsCompatibleTheme-HAgk0scL.js";import"./Label-BE6rd0_D.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Drc_0i_v.js";import"./index-ymtmGnRC.js";import"./index-Qa9FghTo.js";import"./types-BoP1bnqQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cgj9tABh.js";import"./throttle-RrwSa6SL.js";import"./index-EK-QJAGk.js";import"./index-7-TwA9Wc.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-lM1IufFg.js";import"./axisSelectors-FUoH9jZO.js";import"./index-BJASh04Q.js";import"./CartesianChart-CW2SUDgI.js";import"./chartDataContext-C0h1ipKh.js";import"./CategoricalChart-BMDkLrmt.js";import"./Curve-CUN9zty4.js";import"./step-LibK8RJE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BKW3YVwF.js";import"./useAnimationId-DiRDlhkC.js";import"./ActivePoints-BsN3X_AV.js";import"./Dot-CdPH0Qt5.js";import"./RegisterGraphicalItemId-CNR4K2Kh.js";import"./ErrorBarContext-iNIezAqw.js";import"./GraphicalItemClipPath-BRvY79JN.js";import"./SetGraphicalItem-CbnjD7Sn.js";import"./getRadiusAndStrokeWidthFromDot-CqH6eDG0.js";import"./ActiveShapeUtils-D2gPOJru.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-Ctn7gXwm.js";import"./uniqBy-Dewbdz2d.js";import"./iteratee-BhDG6mCi.js";import"./Cross-Rnva37v6.js";import"./Rectangle-IbtOhjas.js";import"./util-Dxo8gN5i.js";import"./Sector-CjBiSYix.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
