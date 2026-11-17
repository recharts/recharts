import{R as e}from"./iframe-DU9JCgt3.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-aQms9ffh.js";import{R as h}from"./zIndexSlice-CxGcNVtb.js";import{C as g}from"./ComposedChart-CdeuUBYe.js";import{L as x}from"./Line--t4nfpf_.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D71t0tOP.js";import{T as V}from"./Tooltip-B8DR2I5Y.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CbM1zHQj.js";import"./Layer-8TmRCycn.js";import"./resolveDefaultProps-DjHw4YyH.js";import"./Text-CxPCVLsv.js";import"./ZIndexLayer-DyKyG2im.js";import"./index-BY0VFtFS.js";import"./index-CswZpk24.js";import"./Label-TtbmFLuu.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-2A6VXBMe.js";import"./throttle-BSvWgvBy.js";import"./types-BRIT5d70.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dpx6Aro9.js";import"./index-BABuRh0J.js";import"./index-CiCV4MQd.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-Ba1wHviL.js";import"./RechartsWrapper-EGU-JwYV.js";import"./index-BMDBiiS9.js";import"./fillDefinitions-CAZ5LaLK.js";import"./CartesianChart-D0Nvp_pW.js";import"./chartDataContext-D3U_nlv4.js";import"./CategoricalChart-BN1LMHzB.js";import"./getRadiusAndStrokeWidthFromDot-DhmVJFDn.js";import"./Curve-CiFPjJzw.js";import"./step-CSLjLb0b.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BKp-1fzi.js";import"./ActivePoints-BMENxG1Z.js";import"./Dot-Cq9hKL4h.js";import"./activeStyles-DjdKzu9Y.js";import"./useAnimationId-CMFzH8KV.js";import"./Symbols-CqwNhkfd.js";import"./symbol-C9biWcKI.js";import"./ErrorBarContext-Cf3Qd7xR.js";import"./SetGraphicalItem-Dj9i93RZ.js";import"./ActiveShapeUtils-CkxgtXn-.js";import"./useEffectiveDataKey-9kbdNBk-.js";import"./useElementOffset-n2MkMml8.js";import"./uniqBy-y429opov.js";import"./iteratee-Hdf7I3vo.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DvFr-zYd.js";import"./Rectangle-Cr7srdQH.js";import"./util-Dxo8gN5i.js";import"./Sector-CMcVdojt.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
